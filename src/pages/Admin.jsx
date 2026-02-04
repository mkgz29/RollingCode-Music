import { useState } from "react";
import Navbar from "../components/Navbar";
import { addSong, getSongs, deleteSong } from "../data/songsStorage";
import SearchItunes from "../components/SearchItunes";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");
  const [songs, setSongs] = useState(getSongs());
  const [editingId, setEditingId] = useState(null);
  const [category, setCategory] = useState("hits");

  const agregarCancion = (e) => {
    e.preventDefault();
    if (!title.trim() || !audio.trim()) return;

    if (editingId) {
      const updatedSongs = songs.map((song) =>
        song.id === editingId
          ? {
              ...song,
              title: title.trim(),
              artist: artist.trim(),
              image: image.trim(),
              audio: audio.trim(),
              category,
            }
          : song,
      );
      localStorage.setItem("songs", JSON.stringify(updatedSongs));
      setSongs(updatedSongs);
    } else {
      addSong({
        title: title.trim(),
        artist: artist.trim(),
        image: image.trim(),
        audio: audio.trim(),
        category,
      });
      setSongs(getSongs());
    }

    setTitle("");
    setArtist("");
    setImage("");
    setAudio("");
    setEditingId(null);
  };

  const eliminarCancion = (id) => {
    deleteSong(id);
    setSongs(getSongs());
  };

  const editarCancion = (song) => {
    setTitle(song.title);
    setArtist(song.artist || "");
    setImage(song.image || "");
    setAudio(song.audio || "");
    setEditingId(song.id);
    setCategory(song.category || "hits");
  };

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <Navbar />
      <main className="p-3 p-md-5 text-white" style={{ paddingTop: "20px" }}>
        <div className="admin-content">
          <div className="text-center mb-5">
            <h1 className="fw-bold display-4" style={{ color: "#fff" }}>Administration Panel</h1>
            <p style={{ color: "#b3b3b3" }}>Manage your music library</p>
          </div>

          <SearchItunes onSave={() => setSongs(getSongs())} />

          <div className="card shadow-lg mb-5" style={{ 
            background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
            border: "1px solid #333",
            borderRadius: "12px"
          }}>
            <div className="card-body p-4">
              <h5 className="card-title mb-4 text-white fw-bold">
                <i className="bi bi-plus-circle me-2" style={{ color: "#ff021b" }}></i>
                Add new song
              </h5>

              <form onSubmit={agregarCancion} className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label text-white-50 small">Song Name</label>
                  <input
                    className="form-control"
                    style={{ 
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #444",
                      color: "#fff"
                    }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter song name"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label text-white-50 small">Audio URL</label>
                  <input
                    className="form-control"
                    style={{ 
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #444",
                      color: "#fff"
                    }}
                    value={audio}
                    onChange={(e) => setAudio(e.target.value)}
                    placeholder="https://example.com/song.mp3"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label text-white-50 small">Image URL</label>
                  <input
                    className="form-control"
                    style={{ 
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #444",
                      color: "#fff"
                    }}
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://example.com/cover.jpg"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label text-white-50 small">Artist Name</label>
                  <input
                    className="form-control"
                    style={{ 
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #444",
                      color: "#fff"
                    }}
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    placeholder="Enter artist name"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label text-white-50 small">Category</label>
                  <select
                    className="form-select"
                    style={{ 
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #444",
                      color: "#fff"
                    }}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="hits">Hit Lists</option>
                    <option value="community">Community</option>
                    <option value="featured">Featured Songs</option>
                  </select>
                </div>

                <div className="col-12 mt-4">
                  <button
                    className="btn btn-danger px-5 py-2"
                    type="submit"
                    style={{ 
                      fontSize: "16px", 
                      fontWeight: "600",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(255, 2, 27, 0.3)"
                    }}
                  >
                    {editingId ? "Update Song" : "Add Song"}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      className="btn btn-outline-light ms-2 px-4 py-2"
                      onClick={() => {
                        setTitle("");
                        setArtist("");
                        setImage("");
                        setAudio("");
                        setEditingId(null);
                      }}
                      style={{ borderRadius: "8px" }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 mb-0 fw-bold text-white">
              <i className="bi bi-music-note-list me-2" style={{ color: "#ff021b" }}></i>
              Saved songs
            </h2>
            <span className="badge bg-danger" style={{ fontSize: "14px", padding: "8px 16px" }}>
              {songs.length} {songs.length === 1 ? "song" : "songs"}
            </span>
          </div>

          <div className="row g-4">
            {songs.length === 0 ? (
              <div className="col-12">
                <div className="text-center py-5" style={{ 
                  background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                  border: "1px solid #333",
                  borderRadius: "12px"
                }}>
                  <i className="bi bi-music-note" style={{ fontSize: "48px", color: "#666" }}></i>
                  <p className="text-muted mt-3 mb-0">No songs added yet</p>
                  <p className="text-white-50 small">Start by adding your first song above</p>
                </div>
              </div>
            ) : (
              songs.map((song) => (
                <div key={song.id} className="col-12 col-md-6 col-lg-4">
                  <div className="card h-100" style={{ 
                    background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                    border: "1px solid #333",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 2, 27, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
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
                      <h6 className="mb-1 fw-bold text-white text-truncate">{song.title}</h6>
                      {song.artist && (
                        <p className="mb-2 small text-white-50 text-truncate">{song.artist}</p>
                      )}
                      
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

                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-light flex-grow-1"
                          onClick={() => editarCancion(song)}
                          style={{ 
                            fontSize: "14px",
                            borderRadius: "6px",
                            padding: "6px 12px"
                          }}
                        >
                          <i className="bi bi-pencil me-1"></i>
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger flex-grow-1"
                          onClick={() => eliminarCancion(song.id)}
                          style={{ 
                            fontSize: "14px",
                            borderRadius: "6px",
                            padding: "6px 12px"
                          }}
                        >
                          <i className="bi bi-trash me-1"></i>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        
        <style>{`
          .admin-content {
            margin-left: 270px;
            max-width: 1400px;
          }
          
          @media (max-width: 992px) {
            .admin-content {
              margin-left: 0 !important;
              max-width: 100%;
            }
          }
        `}</style>
      </main>
    </div>
  );
}