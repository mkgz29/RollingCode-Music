import { Link } from 'react-router-dom';

const SongCard = ({ song }) => {
  return (
    <Link to={`/detail/${song.id}`}   state={{ song }}   style={{ textDecoration: 'none' }}>
      <div
        className="card h-100 bg-dark text-white mb-3 border-0 shadow-lg overflow-hidden"
        style={{ cursor: 'pointer' }}
      >
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={song.image}
            className="card-img-top"
            alt={song.title}
            style={{ 
              height: '200px', 
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
          }} />
        </div>

        <div className="card-body p-3">
          <h5 className="card-title fw-bold mb-2 text-truncate">{song.title}</h5>
          <p className="card-text text-light mb-1 text-truncate">{song.artist}</p>
          <p className="text-muted small text-truncate mb-0">{song.album || 'Álbum desconocido'}</p>
        </div>
      </div>
    </Link>
  );
};
export default SongCard;