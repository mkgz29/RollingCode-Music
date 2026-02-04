// src/components/AudioPlayer.jsx
import { useRef, useEffect } from "react";

const AudioPlayer = ({ audioSrc, autoPlay = true }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play();
    }
  }, [autoPlay]);

  return (
    <div style={{ marginTop: 12 }}>
      <audio ref={audioRef} src={audioSrc} />
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 gap-md-4 gap-lg-5 mt-4 mb-4">
        {/* Shuffle */}
        <button className="btn btn-outline-light btn-sm btn-md-md" onClick={() => alert("Not implemented yet")}>
          <i className="bi bi-shuffle fs-5 fs-md-4"></i>
        </button>

        {/* Previous */}
        <button className="btn btn-outline-light btn-sm btn-md-md" onClick={() => alert("Not implemented yet")}>
          <i className="bi bi-skip-start-fill fs-5 fs-md-4"></i>
        </button>

        {/* Play */}
        <button className="btn btn-success" onClick={() => audioRef.current?.play()}>
          <i className="bi bi-play-fill fs-4 fs-md-3 rounded-pill  "></i>
        </button>

        {/* Pause */}
        <button className="btn btn-danger" onClick={() => audioRef.current?.pause()}>
          <i className="bi bi-pause-fill fs-4 fs-md-3 text-light"></i>
        </button>

        {/* Next */}
        <button className="btn btn-outline-light btn-sm btn-md-md" onClick={() => alert("Not implemented yet")}>
          <i className="bi bi-skip-end-fill fs-5 fs-md-4"></i>
        </button>

        {/* Repeat */}
        <button className="btn btn-outline-light btn-sm btn-md-md" onClick={() => alert("Not implemented yet")}>
          <i className="bi bi-repeat fs-5 fs-md-4"></i>
        </button>

        {/* Like */}
        <button className="btn btn-outline-success btn-sm btn-md-md" onClick={() => alert("Not implemented yet")}>
        <i className="bi bi-hand-thumbs-up text-light fs-6 fs-md-5"></i>
        </button>

                <button className="btn btn-outline-danger btn-sm btn-md-md" onClick={() => alert("Not implemented yet")}>
        <i className="bi bi-hand-thumbs-down text-light fs-6 fs-md-5"></i>
        </button>

        {/* Volume Control */}
        <div className="d-none d-md-flex align-items-center gap-3 fs-1">
<i className="bi bi-soundwave text-light" ></i>
          <input
            type="range"
            className="form-range volume-slider"
            min="0"
            max="1"
            step="0.01"
            onChange={(e) => (audioRef.current.volume = Number(e.target.value))}
            
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;