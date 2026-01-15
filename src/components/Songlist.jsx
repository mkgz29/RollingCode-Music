import songs from '../data/song.js';

const Songlist = () => {
    return (
         <div>
      <h2>Lista de canciones</h2>

      {songs.map((song) => (
        <div key={song.id}>
          <h4>{song.tittle}</h4>
          <p>{song.artist}</p>
          <audio controls src={song.audio}></audio>
        </div>
      ))}
    </div>
    )
};

export default Songlist;