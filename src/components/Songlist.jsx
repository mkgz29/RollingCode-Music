import { useEffect, useState } from "react";
import { getSongs } from "../data/songsStorage";
import SongCard from "./SongCard.jsx";

const Songlist = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(getSongs());
  }, []);

  if (songs.length === 0) {
    return (
      <p className="text-center text-muted mt-5">No hay canciones cargadas</p>
    );
  }

  return (
    <div className="container my-4">
      <div className="row g-4">
        {songs.map((song) => (
          <div key={song.id} className="col-12 col-sm-6 col-lg-4">
            <SongCard song={song} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songlist;
