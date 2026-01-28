import { useParams } from "react-router-dom";
import { getSongs } from "../data/songsStorage";
import Comments from "../components/Comments.jsx";  
import Navbar from "../components/navbar.jsx";
import AudioPlayer from "../components/AudioPlayer.jsx";
import SongInfo from "../components/SongInfo.jsx";

const Detail = () => {
  const { id } = useParams();
  const songs = getSongs();
  const song = songs.find((s) => String(s.id) === String(id));

  if (!song) return <p>Canción no encontrada</p>;

  return (
    <div>
      <Navbar />
             <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <SongInfo title={song.title} artist={song.artist} image={song.image} />
            <AudioPlayer audioSrc={song.audio} />
            <Comments id={song.id} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Detail;