import { Link } from 'react-router-dom';

const SongCard = ({ song }) => {
  return (
    <Link to={`/detail/${song.id}`} style={{ textDecoration: 'none' }}>
      <div
        className="card h-100 bg-dark text-white mb-3"
        style={{ cursor: 'pointer' }}
      >
        <img
          src={song.image}
          className="card-img-top"
          alt={song.title}
          style={{ height: '140px', objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">{song.title}</h5>
          <p className="card-text text-muted">{song.artist}</p>
          <audio controls src={song.audio} className="w-100" />
        </div>
      </div>
    </Link>
  );
};
export default SongCard;