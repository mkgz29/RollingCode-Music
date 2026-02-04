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
      // Inicializar categorías para cada canción
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
    onSave?.(); // para que Admin refresque lista
  };

  const handleCategoryChange = (songId, category) => {
    setSelectedCategories(prev => ({
      ...prev,
      [songId]: category
    }));
  };

   return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Search on iTunes</h5>

        <form onSubmit={handleSearch} className="row g-2 align-items-center">
          <div className="col-12 col-md-8">
            <input
              className="form-control"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Ex: bad bunny, eminem, dua lipa..."
            />
          </div>
          <div className="col-12 col-md-4">
            <button className="btn btn-dark w-100" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}

        {results.length > 0 && (
          <div className="row g-3 mt-3">
            {results.map((song) => (
              <div key={song.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100">
                  {song.image && (
                    <img
                      src={song.image}
                      alt={song.title}
                      className="card-img-top"
                      style={{ height: 160, objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <div className="fw-semibold">{song.title}</div>
                    <div className="text-muted">{song.artist}</div>

                    {song.audio && (
                      <audio controls src={song.audio} className="w-100 mt-2" />
                    )}

                    <select
                      className="form-select mt-2"
                      value={selectedCategories[song.id] || "hits"}
                      onChange={(e) => handleCategoryChange(song.id, e.target.value)}
                    >
                      <option value="hits">Hit Lists</option>
                      <option value="community">Community</option>
                      <option value="featured">Featured Songs</option>
                    </select>

                    <button
                      className="btn btn-danger w-100 mt-2"
                      type="button"
                      onClick={() => handleAdd(song)}
                    >
                      Add to Rolling Code Music
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
