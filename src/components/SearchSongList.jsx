import { Link } from "react-router-dom";
import SongCard from "./SongCard.jsx";

const SearchResultsList = ({ songs = [], loading = false }) => {
  if (loading) {
    return <p className="text-center text-muted mt-5">Cargando...</p>;
  }

  if (songs.length === 0) {
    return (
      <p className="text-center text-muted mt-5">No results found</p>
    );
  }

  return (
    <div className="container my-4">
      <div className="row g-4">
        {songs.map((song) => (
          <div key={song.id} className="col-12 col-sm-6 col-lg-4">
            <Link to={`/detail/${song.id}`} state={{ song }} style={{ textDecoration: 'none' }}>
              <SongCard song={song} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsList;