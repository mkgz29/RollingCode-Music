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
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -100, opacity: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
      <div className="container-fluid py-3">
        <div className="row g-4">
          <div className="col-12 col-xl-8">
            <Link to="/" className="detail-logo">
              <img src={logo} alt="Volver a Home" />
            </Link>
            <SearchForm />
            <SongInfo title={song.title} artist={song.artist} image={song.image} />
            <AudioPlayer audioSrc={song.audio} autoPlay={canAutoPlay} />
            <Comments id={song.id} />
          </div>
          <div className="col-12 col-xl-4">
            <Aside currentSongId={song.id} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;