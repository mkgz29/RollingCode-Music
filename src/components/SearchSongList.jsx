import { Link } from "react-router-dom";
import SongCard from "./SongCard.jsx";
import { motion } from "framer-motion";

const SearchResultsList = ({ songs = [], loading = false }) => {
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-5"
      >
        <div className="spinner-border text-danger" role="status" style={{ width: "3rem", height: "3rem" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-white mt-3 fw-semibold">Searching...</p>
      </motion.div>
    );
  }

  if (songs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center mt-5"
      >
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔍</div>
        <h3 className="text-white fw-bold mb-2">No results found</h3>
        <p className="text-muted">Try searching with different keywords</p>
      </motion.div>
    );
  }

  return (
    <div className="container my-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="row g-4"
      >
        {songs.map((song, index) => (
          <motion.div 
            key={song.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="col-12 col-sm-6 col-lg-4"
          >
            <Link to={`/detail/${song.id}`} state={{ song }} style={{ textDecoration: 'none' }}>
              <SongCard song={song} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SearchResultsList;