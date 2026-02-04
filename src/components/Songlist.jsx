import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSongs } from "../data/songsStorage";
import SongCard from "./SongCard.jsx";
import channels from "../data/channels";
import artists from "../data/artists";


const Songlist = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(getSongs());
  }, []);
  
  const communitySongs = songs.filter(s => s.category === "community");
  const hitSongs = songs.filter(s => s.category === "hits");
  const featuredSongs = songs.filter(s => s.category === "featured");

  if (songs.length === 0) {
    return (
      <p className="text-center text-muted mt-5">No songs loaded</p>
    );
  }

  return (
    <div className="container my-4 ">
       <h2 className="mt-4  mb-4 text-start text-light">Featured Artists</h2>
      <div className="scroll-section overflow-x-scroll">
        <div className="d-flex gap-4 pb-3" style={{ minWidth: 'max-content' }}>
          {artists.map((artist) => (
            <Link 
              key={artist.id} 
              to="/404" 
              className="text-decoration-none"
              style={{ minWidth: '180px' }}
            >
              <div className="text-center">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="rounded-circle mb-2"
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    objectFit: 'cover',
                    border: '2px solid #333',
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <h6 className="text-white mb-1 text-truncate">{artist.name}</h6>
                <p className="text-light text-opacity-50 small">{artist.followers}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {hitSongs.length > 0 && (
        <>
          <h2 className="mt-4 mb-4 text-start text-light">Hit Lists</h2>
          <div className="scroll-section overflow-x-scroll">
            <div className="d-flex gap-4 pb-3" style={{ minWidth: 'max-content' }}>
              {hitSongs.map((song) => (
                <div key={song.id} style={{ minWidth: '300px', maxWidth: '300px' }}>
                  <SongCard song={song} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {communitySongs.length > 0 && (
        <>
          <h2 className="mt-4 mb-4 text-start text-light">Community</h2>
          <div className="scroll-section overflow-x-scroll">
            <div className="d-flex gap-4 pb-3" style={{ minWidth: 'max-content' }}>
              {communitySongs.map((song) => (
                <div key={song.id} style={{ minWidth: '300px', maxWidth: '300px' }}>
                  <SongCard song={song} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <h2 className="mt-4 mb-4 text-start text-light">Featured Music Channels</h2>
      <div className="scroll-section overflow-x-scroll">
        <div className="d-flex gap-4 pb-3" style={{ minWidth: 'max-content' }}>
          {channels.map((channel) => (
            <Link 
              key={channel.id} 
              to="/404" 
              className="text-decoration-none"
              style={{ minWidth: '180px' }}
            >
              <div className="text-center">
                <img 
                  src={channel.image} 
                  alt={channel.name}
                  className="rounded-circle mb-2"
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    objectFit: 'cover',
                    border: '2px solid #333',
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <h6 className="text-white mb-1 text-truncate">{channel.name}</h6>
                <p className="text-light text-opacity-50 small">{channel.subscribers}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {featuredSongs.length > 0 && (
        <>
          <h2 className="mt-4 text-start text-light">Featured Songs</h2>
          <div className="row g-4 mt-4">
            {featuredSongs.map((song) => (
              <div key={song.id} className="col-12 col-sm-6 col-lg-4">
                <SongCard song={song} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Songlist;
