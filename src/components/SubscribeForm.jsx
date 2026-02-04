import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubscribeForm = ({ plan }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Email must contain @";
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      navigate("/notfound");
    }, 2000);
  };

  if (loading) {
    return (
      <div className="text-center mt-5 p-5" style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
        borderRadius: "16px",
        border: "1px solid #333"
      }}>
        <div className="spinner-border text-danger mb-4" style={{ width: "3rem", height: "3rem" }}></div>
        <h3 className="text-white mb-3">Processing subscription...</h3>
        <p className="text-white-50">
          Selected plan: <strong className="text-danger">{plan}</strong>
        </p>
      </div>
    );
  }

  return (
    <form className="mt-5 p-5" noValidate onSubmit={handleSubmit} style={{
      background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
      borderRadius: "16px",
      border: "1px solid #333",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
    }}>
      <h2 className="text-white text-center mb-4 fw-bold">
        Subscribe to <span style={{ color: "#ff021b" }}>{plan}</span> plan
      </h2>

      <div className="mb-4">
        <label className="form-label text-white-50 small">Email address</label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          style={{
            backgroundColor: "#0a0a0a",
            border: "1px solid #444",
            color: "#fff",
            padding: "12px 16px",
            borderRadius: "8px",
            fontSize: "16px"
          }}
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <div className="invalid-feedback d-block">
            {errors.email}
          </div>
        )}
      </div>

      <button 
        className="btn btn-danger w-100" 
        type="submit"
        style={{
          padding: "14px",
          fontSize: "16px",
          fontWeight: "700",
          borderRadius: "8px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          boxShadow: "0 4px 16px rgba(255, 2, 27, 0.4)"
        }}
      >
        Confirm subscription
      </button>
      
      <p className="text-center text-white-50 small mt-4 mb-0">
        By subscribing, you agree to our terms and conditions
      </p>
    </form>
  );
};

export default SubscribeForm;
