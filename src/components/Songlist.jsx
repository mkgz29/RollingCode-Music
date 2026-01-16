import songs from '../data/song.js';

const Songlist = () => {
    return (
         <div className="container my-4">
      <h2 className="mb-4">Lista de canciones</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {songs.map((song) => (
          <div key={song.id} className="col">
            <div className="card h-100 bg-dark text-white">
              
              <div className="card-body">
                <img src={song.image} className="card-img-top" alt={song.title} style={{height: '150px',width: "150px", objectFit: 'cover'}} />
                <h5 className="card-title">{song.title}</h5>
                <p className="card-text text-muted">{song.artist}</p>
                <audio controls src={song.audio} className="w-100"></audio>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
};
export default Songlist;