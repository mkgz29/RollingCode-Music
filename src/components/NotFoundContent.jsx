import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundContent = ({ title, message, image, redirectTo = "/" }) => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={styles.content}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img src={image} alt="404 Error" style={styles.image} />
        </motion.div>

        <motion.h1 
          style={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          style={styles.message}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {message}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={styles.timerContainer}
        >
          <p style={styles.timer}>
            Redirecting in <span style={styles.timerNumber}>{seconds}</span> seconds...
          </p>
        </motion.div>

        <motion.button 
          onClick={() => navigate(redirectTo)} 
          className="btn btn-danger"
          style={styles.button}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 24px rgba(255, 2, 27, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Go back home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFoundContent;

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    position: "relative",
    overflow: "hidden"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    textAlign: "center",
    maxWidth: "600px",
    zIndex: 1
  },
  image: {
    maxWidth: "350px",
    width: "100%",
    height: "auto",
    borderRadius: "20px",
    filter: "drop-shadow(0 10px 30px rgba(255, 2, 27, 0.3))"
  },
  title: {
    fontSize: "6rem",
    fontWeight: "900",
    background: "linear-gradient(135deg, #ff021b 0%, #ff4444 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: 0,
    textShadow: "0 4px 20px rgba(255, 2, 27, 0.3)"
  },
  message: {
    fontSize: "1.5rem",
    color: "#b3b3b3",
    margin: 0,
    lineHeight: "1.6"
  },
  timerContainer: {
    marginTop: "1rem"
  },
  timer: {
    fontSize: "1.1rem",
    color: "#888",
    margin: 0
  },
  timerNumber: {
    color: "#ff021b",
    fontWeight: "700",
    fontSize: "1.3rem"
  },
  button: {
    padding: "14px 32px",
    fontSize: "1rem",
    fontWeight: "700",
    borderRadius: "50px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 4px 16px rgba(255, 2, 27, 0.4)",
    border: "none",
    marginTop: "1rem"
  }
};
