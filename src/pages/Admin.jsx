import { useState } from "react";
import Navbar from "../components/navbar";
import { addSong, getSongs, deleteSong } from "../data/songsStorage";
import SearchItunes from "../components/SearchItunes";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");
  const [songs, setSongs] = useState(getSongs());
  const [editingId, setEditingId] = useState(null);

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
  };
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <aside className="col-12 col-md-3 col-lg-2 p-0">
          <Navbar />
        </aside>

        <main className="col-12 col-md-9 col-lg-10 p-3 p-md-5  text-white">
          <h1 className="mb-4 fw-bold">Panel de Administracion</h1>
          <SearchItunes onSave={() => setSongs(getSongs())} />
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Agregar nueva canción</h5>

              <form onSubmit={agregarCancion} className="row g-3">
                <div className="col-12 col-md-6">
                  <input
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nombre de la canción"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <input
                    className="form-control"
                    value={audio}
                    onChange={(e) => setAudio(e.target.value)}
                    placeholder="URL del audio (mp3)"
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="URL de la imagen"
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    className="form-control"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    placeholder="Nombre del artista"
                    required
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-danger" type="submit" style={{ fontSize: '16px', fontWeight: '500' }}>
                    Agregar Canción
                  </button>
                </div>
              </form>
            </div>
          </div>

          <h2 className="h5 mb-3">Canciones guardadas ({songs.length})</h2>

          <div className="list-group shadow-sm">
            {songs.length === 0 ? (
              <div className="list-group-item text-center text-muted py-4">
                No hay canciones agregadas
              </div>
            ) : (
              songs.map((song) => (
                <div key={song.id} className="list-group-item">
                  <h6 className="mb-0 fw-semibold">{song.title}</h6>
                  <div className="d-flex justify-content-center align-items-start gap-3 mb-4 mt-4">
                    
                    <button
                      className="btn btn-sm btn-outline-dark flex-shrink-0 me-2"
                      onClick={() => editarCancion(song)}
                      style={{ fontSize: '16px', fontWeight: '500' }}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-sm btn-danger flex-shrink-0"
                      onClick={() => eliminarCancion(song.id)}
                      style={{ fontSize: '16px', fontWeight: '500' }}
                    >
                      Eliminar
                    </button>
                  </div>

                  {song.audio && (
                    <audio controls src={song.audio} className="w-100" 
                    style={{ maxWidth: '300px' }}/>
                  )}
                  {song.artist && (
                    <p className="mb-0 mt-2 text-muted">
                      Artista: {song.artist}
                    </p>
                  )}
                  {song.image && (
                    <img
                      src={song.image}
                      alt={song.title}
                      className="img-fluid mt-2"
                       style={{ maxWidth: '300px' }}
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
