// src/components/SongInfo.jsx
const SongInfo = ({ title, artist, image }) => {
  return (
    <div className="text-center">
      <h2 style={{ color: "white" }}>{title}</h2>
      <p style={{ color: "white" }}>{artist}</p>
      
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: 500, borderRadius: 50 }}
        />
      )}
    </div>
  );
};

export default SongInfo;