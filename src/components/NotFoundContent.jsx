import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundContent = ({ title, message, image, redirectTo = "/" }) => {
  const [seconds, setSeconds] = useState(8);
  const navigate = useNavigate();

  // contador
  useEffect(() => {
    if (seconds === 0) {
      navigate(redirectTo);
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, navigate, redirectTo]);

  return (
    <div style={styles.container}>
      <img src={image} alt="404" style={styles.image} />

      <h1>{title}</h1>
      <p>{message}</p>

      <p>Redirigiendo en {seconds} segundos...</p>

      <button onClick={() => navigate(redirectTo)} className="btn btn-danger">
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFoundContent;

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    textAlign: "center",
  },
  image: {
    maxWidth: "300px",
  },
  button: {
    padding: "0.6rem 1.2rem",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#646cff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
  },
};
