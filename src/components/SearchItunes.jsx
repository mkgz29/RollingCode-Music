import { useState } from "react";
import { searchSongs } from "../services/itunesApi";
import { addSong, getSongs } from "../data/songsStorage";

export default function SearchItunes({ onSave }) {
  const [term, setTerm] = useState("bad bunny");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [selectedCategories, setSelectedCategories] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const songs = await searchSongs(term, 12);
      setResults(songs);
      const initialCategories = {};
      songs.forEach(song => {
        initialCategories[song.id] = "hits";
      });
      setSelectedCategories(initialCategories);
    } catch (err) {
      setError(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = (song) => {
    const existing = getSongs();
    const exists = existing.some((s) => String(s.id) === String(song.id));
    if (exists) return;

    const category = selectedCategories[song.id] || "hits";
    addSong({ ...song, category });
    onSave?.();
  };

  const handleCategoryChange = (songId, category) => {
    setSelectedCategories(prev => ({
      ...prev,
      [songId]: category
    }));
  };

   return (
    <div className="card shadow-lg mb-5" style={{ 
      background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
      border: "1px solid #333",
      borderRadius: "12px"
    }}>
      <div className="card-body p-4">
        <h5 className="card-title mb-4 text-white fw-bold">
          <i className="bi bi-search me-2" style={{ color: "#ff021b" }}></i>
          Search on iTunes
        </h5>

        <form onSubmit={handleSearch} className="row g-3 align-items-end mb-4">
          <div className="col-12 col-md-8">
            <label className="form-label text-white-50 small">Search for songs</label>
            <input
              className="form-control"
              style={{ 
                backgroundColor: "#1a1a1a",
                border: "1px solid #444",
                color: "#fff",
                padding: "10px 16px"
              }}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Ex: bad bunny, eminem, dua lipa..."
            />
          </div>
          <div className="col-12 col-md-4">
            <button 
              className="btn btn-dark w-100" 
              disabled={loading}
              style={{
                padding: "10px 16px",
                fontWeight: "600",
                borderRadius: "8px",
                border: "1px solid #444"
              }}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Searching...
                </>
              ) : (
                <>
                  <i className="bi bi-search me-2"></i>
                  Search
                </>
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="alert alert-danger mt-3 mb-0" style={{
            backgroundColor: "rgba(220, 53, 69, 0.1)",
            border: "1px solid rgba(220, 53, 69, 0.3)",
            color: "#ff6b6b"
          }}>
            <i className="bi bi-exclamation-triangle me-2"></i>
            {error}
          </div>
        )}

        {results.length > 0 && (
          <div className="row g-4 mt-2">
            {results.map((song) => (
              <div key={song.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100" style={{ 
                  background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
                  border: "1px solid #2a2a2a",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 2, 27, 0.2)";
                  e.currentTarget.style.borderColor = "#ff021b";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#2a2a2a";
                }}
                >
                  {song.image && (
                    <div style={{ height: "200px", overflow: "hidden", backgroundColor: "#000" }}>
                      <img
                        src={song.image}
                        alt={song.title}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div className="card-body p-3">
                    <h6 className="fw-bold text-white mb-1 text-truncate">{song.title}</h6>
                    <p className="text-white-50 small mb-3 text-truncate">{song.artist}</p>

                    {song.audio && (
                      <audio 
                        controls 
                        src={song.audio} 
                        className="w-100 mb-3" 
                        style={{ 
                          height: "40px",
                          borderRadius: "8px"
                        }}
                      />
                    )}

                    <select
                      className="form-select mb-3"
                      style={{ 
                        backgroundColor: "#1a1a1a",
                        border: "1px solid #444",
                        color: "#fff",
                        fontSize: "14px",
                        borderRadius: "6px"
                      }}
                      value={selectedCategories[song.id] || "hits"}
                      onChange={(e) => handleCategoryChange(song.id, e.target.value)}
                    >
                      <option value="hits">Hit Lists</option>
                      <option value="community">Community</option>
                      <option value="featured">Featured Songs</option>
                    </select>

                    <button
                      className="btn btn-danger w-100"
                      type="button"
                      onClick={() => handleAdd(song)}
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        borderRadius: "6px",
                        padding: "8px",
                        boxShadow: "0 2px 8px rgba(255, 2, 27, 0.2)"
                      }}
                    >
                      <i className="bi bi-plus-circle me-2"></i>
                      Add to Library
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
