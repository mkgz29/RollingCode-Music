import { useState } from "react";
import Navbar from "../components/navbar";
import { addSong, getSongs, deleteSong } from "../data/songsStorage";


const Admin = () => {
  
  // Estados del formulario
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audio, setAudio] = useState("");
  const [image, setImage] = useState("");

  // Para listar lo que ya está guardado (feedback visual)
  const [songs, setSongs] = useState(getSongs());

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación mínima
    if (!title.trim() || !artist.trim() || !audio.trim()) {
      alert("Completa title, artist y audio.");
      return;
    }

    const newSong = {
      title: title.trim(),
      artist: artist.trim(),
      audio: audio.trim(),
      image: image.trim(), // opcional
    };

    addSong(newSong);

    // refrescar lista en pantalla
    setSongs(getSongs());

    // limpiar inputs
    setTitle("");
    setArtist("");
    setAudio("");
    setImage("");
  };

  const handleDelete = (id) => {
    deleteSong(id);
    setSongs(getSongs());
  };

  return (
    <div className="container my-4">
      
      <Navbar />
      <h1 className="mb-3">Admin - Cargar canciones</h1>
      {/* FORMULARIO */}
      <form onSubmit={handleSubmit} className="card p-3 mb-4">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ej: Demo Rcmusic"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Artista</label>
          <input
            className="form-control"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Ej: Mr.RcMusic"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Audio (URL o ruta)</label>
          <input
            className="form-control"
            value={audio}
            onChange={(e) => setAudio(e.target.value)}
            placeholder="Ej: /audios/demo.mp3"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen (opcional)</label>
          <input
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Ej: /img/cover1.png"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar canción
        </button>
      </form>

      {/* LISTA SIMPLE (feedback) */}
      <h2 className="h5">Canciones guardadas: {songs.length}</h2>

      {songs.length === 0 ? (
        <p>No hay canciones todavía. Agregá la primera desde el formulario.</p>
      ) : (
        <ul className="list-group">
          {songs.map((song) => (
            <li key={song.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{song.title}</strong> — {song.artist}
              </div>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(song.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admin;
