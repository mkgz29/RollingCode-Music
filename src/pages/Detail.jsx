import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSongs } from "../data/songsStorage";
import Comments from "../components/Comments.jsx";  
import AudioPlayer from "../components/AudioPlayer.jsx";
import SongInfo from "../components/SongInfo.jsx";
import Aside from "../components/Asidesong";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";
import logo from "../assets/img/donelog.png";
import { motion } from "framer-motion";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [canAutoPlay, setCanAutoPlay] = useState(false);

  const songFromState = location.state?.song;
  const songFromLocal = getSongs().find((s) => String(s.id) === String(id));
  const song = songFromState || songFromLocal;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [id]);

  useEffect(() => {
    setCanAutoPlay(false);
    const timer = setTimeout(() => {
      setCanAutoPlay(true);
    }, 700);

    return () => clearTimeout(timer);
  }, [id]);

  if (!song) return <p className="text-white">Song not found</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
        paddingTop: "20px"
      }}
    >
      <div className="container-fluid" style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 20px" }}>
        <div className="row g-4">
          <div className="col-12 col-xl-8">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Link 
                to="/" 
                style={{
                  display: "inline-block",
                  marginBottom: "20px",
                  transition: "transform 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <img 
                  src={logo} 
                  alt="Volver a Home" 
                  style={{
                    height: "50px",
                    filter: "drop-shadow(0 0 10px rgba(255, 2, 27, 0.3))"
                  }}
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              style={{ marginBottom: "30px" }}
            >
              <SearchForm />
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                background: "linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(10, 10, 10, 0.8) 100%)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "30px",
                marginBottom: "30px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)"
              }}
            >
              <SongInfo title={song.title} artist={song.artist} image={song.image} />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{
                background: "linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(10, 10, 10, 0.8) 100%)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "30px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)"
              }}
            >
              <AudioPlayer audioSrc={song.audio} autoPlay={canAutoPlay} />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              style={{
                background: "linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(10, 10, 10, 0.8) 100%)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "30px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)"
              }}
            >
              <Comments id={song.id} />
            </motion.div>
          </div>

          <div className="col-12 col-xl-4">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              style={{
                position: "sticky",
                top: "20px"
              }}
            >
              <Aside currentSongId={song.id} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;