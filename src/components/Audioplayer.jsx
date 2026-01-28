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
      <div className="d-flex justify-content-center align-items-center gap-5 mt-4 mb-4">
        {/* Shuffle */}
        <button className="btn btn-outline-light" onClick={() => alert("Falta implementar")}>
          <i className="bi bi-shuffle"></i>
        </button>

        {/* Previous */}
        <button className="btn btn-outline-light" onClick={() => alert("Falta implementar")}>
          <i className="bi bi-skip-start-fill"></i>
        </button>

        {/* Play */}
        <button className="btn btn-success btn-lg" onClick={() => audioRef.current?.play()}>
          <i className="bi bi-play-fill"></i>
        </button>

        {/* Pause */}
        <button className="btn btn-warning btn-lg" onClick={() => audioRef.current?.pause()}>
          <i className="bi bi-pause-fill"></i>
        </button>

        {/* Next */}
        <button className="btn btn-outline-light" onClick={() => alert("Falta implementar")}>
          <i className="bi bi-skip-end-fill"></i>
        </button>

        {/* Repeat */}
        <button className="btn btn-outline-light" onClick={() => alert("Falta implementar")}>
          <i className="bi bi-repeat"></i>
        </button>

        {/* Like */}
        <button className="btn btn-outline-danger" onClick={() => alert("Falta implementar")}>
          <i className="bi bi-heart"></i>
        </button>

        {/* Volume Control */}
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-volume-up text-light"></i>
          <input
            type="range"
            className="form-range"
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