import songs from '../data/song.js';
import { Link } from 'react-router-dom';

const Songlist = () => {
    return (
      
<div className="my-4 mx-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {songs.map((song) => (
          <div key={song.id} className="col">
            <Link to={`/detail/${song.id}`} style={{ textDecoration: 'none' }}>
              <div className="card h-100 bg-dark text-white" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                
                <div className="card-body">
                  <h5 className="card-title ">{song.title}</h5>
                  <img src={song.image} className="card-img-top" alt={song.title} style={{height: '150px',width: "200px", objectFit: 'cover'}} />
                  
                  <p className="card-text text-muted">{song.artist}</p>
                  {/* <audio controls src={song.audio} className="w-100"></audio> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    )
};
export default Songlist;