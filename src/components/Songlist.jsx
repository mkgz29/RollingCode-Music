import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSongs } from "../data/songsStorage";
import SongCard from "./SongCard.jsx";
import channels from "../data/channels";
import artists from "../data/artists";
import { motion } from "framer-motion";


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
       <motion.h2 
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
         className="mt-4 mb-4 text-start fw-bold" 
         style={{ 
           color: '#fff',
           fontSize: '2rem',
           background: 'linear-gradient(135deg, #fff 0%, #ff021b 100%)',
           WebkitBackgroundClip: 'text',
           WebkitTextFillColor: 'transparent',
           backgroundClip: 'text'
         }}
       >
         Featured Artists
       </motion.h2>
      <div className="scroll-section overflow-x-scroll" style={{ paddingTop: '10px' }}>
        <div className="d-flex gap-4 pb-3" style={{ minWidth: 'max-content', overflow: 'visible' }}>
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{ minWidth: '180px', overflow: 'visible' }}
            >
              <Link 
                to="/notfound" 
                className="text-decoration-none"
              >
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'visible' }}
                >
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: '8px' }}>
                    <motion.img 
                      src={artist.image} 
                      alt={artist.name}
                      className="rounded-circle"
                      whileHover={{ boxShadow: '0 8px 25px rgba(255, 2, 27, 0.4)' }}
                      style={{ 
                        width: '150px', 
                        height: '150px', 
                        objectFit: 'cover',
                        border: '3px solid transparent',
                        background: 'linear-gradient(#000, #000) padding-box, linear-gradient(135deg, #ff021b, #333) border-box',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                      }}
                    />
                  </div>
                  <h6 className="text-white mb-1 text-truncate fw-semibold">{artist.name}</h6>
                  <p className="text-light text-opacity-50 small mb-0">{artist.followers}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {hitSongs.length > 0 && (
        <>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-5 mb-4 text-start fw-bold" 
            style={{ 
              color: '#fff',
              fontSize: '2rem',
              background: 'linear-gradient(135deg, #fff 0%, #ff021b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Hit Lists
          </motion.h2>
          <div className="scroll-section overflow-x-scroll">
            <div className="d-flex gap-4 pb-3" style={{ minWidth: 'max-content' }}>
              {hitSongs.map((song, index) => (
                <motion.div 
                  key={song.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  style={{ minWidth: '300px', maxWidth: '300px' }}
                >
                  <SongCard song={song} />
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}

      {communitySongs.length > 0 && (
        <>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-5 mb-4 text-start fw-bold" 
            style={{ 
              color: '#fff',
              fontSize: '2rem',
              background: 'linear-gradient(135deg, #fff 0%, #ff021b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Community
          </motion.h2>
          <div className="scroll-section overflow-x-scroll">
            <div className="d-flex gap-4 pb-3" style={{ minWidth: 'max-content' }}>
              {communitySongs.map((song, index) => (
                <motion.div 
                  key={song.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  style={{ minWidth: '300px', maxWidth: '300px' }}
                >
                  <SongCard song={song} />
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-5 mb-4 text-start fw-bold" 
        style={{ 
          color: '#fff',
          fontSize: '2rem',
          background: 'linear-gradient(135deg, #fff 0%, #ff021b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Featured Music Channels
      </motion.h2>
      <div className="scroll-section overflow-x-scroll" style={{ paddingTop: '10px' }}>
        <div className="d-flex gap-4 pb-3" style={{ minWidth: 'max-content', overflow: 'visible' }}>
          {channels.map((channel, index) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{ minWidth: '180px', overflow: 'visible' }}
            >
              <Link 
                to="/notfound" 
                className="text-decoration-none"
              >
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'visible' }}
                >
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: '8px' }}>
                    <motion.img 
                      src={channel.image} 
                      alt={channel.name}
                      className="rounded-circle"
                      whileHover={{ boxShadow: '0 8px 25px rgba(255, 2, 27, 0.4)' }}
                      style={{ 
                        width: '150px', 
                        height: '150px', 
                        objectFit: 'cover',
                        border: '3px solid transparent',
                        background: 'linear-gradient(#000, #000) padding-box, linear-gradient(135deg, #ff021b, #333) border-box',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                      }}
                    />
                  </div>
                  <h6 className="text-white mb-1 text-truncate fw-semibold">{channel.name}</h6>
                  <p className="text-light text-opacity-50 small mb-0">{channel.subscribers}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      {featuredSongs.length > 0 && (
        <>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-5 mb-4 text-start fw-bold" 
            style={{ 
              color: '#fff',
              fontSize: '2rem',
              background: 'linear-gradient(135deg, #fff 0%, #ff021b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Featured Songs
          </motion.h2>
          <div className="row g-4 mt-2">
            {featuredSongs.map((song, index) => (
              <motion.div 
                key={song.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="col-12 col-sm-6 col-lg-4"
              >
                <SongCard song={song} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Songlist;
