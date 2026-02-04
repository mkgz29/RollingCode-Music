// src/components/SongInfo.jsx
const SongInfo = ({ title, artist, album, image }) => {
  return (
    <div className="text-center mt-4 mb-4">
      <h2 className="fs-3 fs-md-2" style={{ color: "white" }}>{title}</h2>
      <p style={{ color: "white" }}>{artist}</p>
      <p style={{ color: "white" }}>{album}</p>
      
      {image && (
        <img
          src={image}
          alt={title}
          className="img-fluid"
          style={{ maxWidth: "500px", width: "100%", borderRadius: "50px" }}
        />
      )}
    </div>
  );
};

export default SongInfo;