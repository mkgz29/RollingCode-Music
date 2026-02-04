import { useState } from "react";
import Navbar from "../components/navbar";
import { addSong, getSongs, deleteSong } from "../data/songsStorage";


export default function Admin() {
 const [title, setTitle] = useState(""); 
  const [songs, setSongs] = useState(getSongs());

  const agregarCancion = (e) => {      
    e.preventDefault(); /* Evita que el formulario se recargue al enviar */
    if (title.trim() === "") return; 
    
    addSong({ title: title.trim() });
    
    setSongs(getSongs());

    setTitle(""); /* Limpia el input */
  }

const eliminarCancion = (id) => {
    deleteSong(id);
    setSongs(getSongs()); /* Actualiza el estado de localStorage */
  };

  return (
 <div className="container my-4 lg-4" style={{minHeight: '100vh'}}>
      <Navbar />

      <h1 className="m-4">Panel de Administración</h1>

      <form onSubmit={agregarCancion} className="card p-3 mb-3">
        <input
          className="form-control mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Escribe el nombre de la canción"
        />

        <button className="btn btn-danger" type="submit">
          Agregar
        </button>
      </form>

      <h2 className="h5">Canciones: {songs.length}</h2>

      <ul className="list-group">
        {songs.map((song) => (
          <li
            key={song.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{song.title}</span>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => eliminarCancion(song.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}