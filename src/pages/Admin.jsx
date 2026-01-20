import { useState } from "react";
import Navbar from "../components/navbar";
import { addSong, getSongs, deleteSong } from "../data/songsStorage";


export default function Admin() {
  const [title, setTitle] = useState(""); /* String */
  const [songs, setSongs] = useState([]); /* Array */

  const agregarCancion = (e) => {      /* Funcion para agregar una cancion  */
    e.preventDefault(); /* Evita que el formulario se recargue al enviar */
    if (title.trim() === "") return; /* Si esta vacio no hhace nada */
 
      setSongs([...songs, title.trim()]); /* Agrega la cancion al estado songs */
  setTitle(""); /* Limpia el input */
  }

  return (
  <div className="container my-4">
    <Navbar />
    <h1 className="mb-3">Admin</h1>

    <input
      className="form-control mb-2"
      value={title}
      onChange={(e) => setTitle(e.target.value)}  /* Guarda el texto actual en el estado , */
      placeholder="Escribe el nombre de la cancion" 
    />

    <p>Texto actual: {title}</p>
  </div>
);

}