import { Link } from "react-router-dom";
import { getSongs } from "../data/songsStorage";

const Aside = ({ currentSongId }) => {
  const songs = getSongs()
    .filter((s) => String(s.id) !== String(currentSongId))
    .slice(0, 100);

  return (

    <aside className="card bg-black text-light overflow-auto thin-scroll" style={{ height: "300vh" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="mb-0">Siguiente</h6>
          <span className="badge text-bg-secondary">Autoplay</span>
        </div>

        <div >
          {songs.map((s) => (
            <Link
              key={s.id}
              to={`/detail/${s.id}`}
              className="text-decoration-none"
            >
              <div className="d-flex gap-2 align-items-center p-2 rounded hover-item">
                <img
                  src={s.image}
                  alt={s.title}
                  width="56"
                  height="56"
                  style={{ objectFit: "cover" }}
                  className="rounded"
                />

                <div className="flex-grow-1">
                  <div className="fw-semibold text-light text-truncate">
                    {s.title}
                  </div>
                  <div className="text-secondary small text-truncate">
                    {s.artist}
                  </div>
                </div>

                <i className="bi bi-play-fill text-secondary"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
