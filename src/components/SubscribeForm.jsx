import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubscribeForm = ({ plan }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true); 

    setTimeout(() => {
      navigate("/notfound");
    }, 2000); 
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h3>Procesando suscripción...</h3>
        <p>Plan seleccionado: <strong>{plan}</strong></p>
        <div className="spinner-border text-danger mt-3"></div>
      </div>
    );
  }

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <h2>Suscribite al plan {plan}</h2>

      <input
        type="email"
        className="form-control my-3"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button className="btn btn-danger w-100">
        Confirmar suscripción
      </button>
    </form>
  );
};

export default SubscribeForm;

