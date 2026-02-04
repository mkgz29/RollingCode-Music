import { authenticateUser } from "../auth/authHelpers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/img/logonavbar.png";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if(auth?.isAuthenticated){
      navigate("/home");
    }
  }, [navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [showTermsModal, setShowTermsModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!email) {
      newErrors.email = "Please Email is Required";
    } else if (!email.includes("@")) {
      newErrors.email = "please Email must contain @";
    }

    if (!password) {
      newErrors.password = "Please provide a password";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (!acceptTerms) {
      newErrors.terms = "You must agree before submitting";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
   

const authUser = authenticateUser(email, password);

if (!authUser) {
  Swal.fire({
    icon: "error",
    title: "Login Failed",
    text: "User not found. Please register first.",
    background: "#1a1a1a",
    color: "#fff",
    confirmButtonColor: "#dc3545",
    confirmButtonText: "Try Again"
  });
  return;
}

localStorage.setItem("auth", JSON.stringify(authUser));

Swal.fire({
  icon: "success",
  title: `Welcome ${authUser.role === "admin" ? "Admin" : ""}!`,
  text: authUser.welcomeMessage || `Successfully logged in as ${email}`,
  background: "#1a1a1a",
  color: "#fff",
  confirmButtonColor: "#dc3545",
  confirmButtonText: "Continue",
  timer: 2500,
  timerProgressBar: true
}).then(() => {
  navigate("/home");
});
      
  
  }

  return (
    <div className="max-auto d-flex justify-content-center align-items-center page-bg" style={{ minHeight: "100vh", padding: "20px" }}>
      <motion.div 
        className="col-12 col-md-6 col-lg-5 px-3 px-md-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src={logo} 
            alt="RollingCode Music" 
            style={{ 
              width: "100px", 
              height: "auto",
              marginBottom: "10px",
              filter: "drop-shadow(0 0 20px rgba(255, 2, 27, 0.5))"
            }} 
          />
        </motion.div>

        <motion.h1 
          className="text-center fw-bold mb-4" 
          style={{ 
            color: "#fff", 
            fontSize: "2.5rem",
            textShadow: "0 0 20px rgba(255, 2, 27, 0.5)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Welcome Back
        </motion.h1>
        
        <motion.div
          style={{
            background: "linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%)",
            borderRadius: "20px",
            padding: "40px 30px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)"
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form noValidate onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label text-light mb-2" style={{ fontWeight: "600", fontSize: "0.95rem" }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "2px solid rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#dc3545";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.boxShadow = "0 0 0 4px rgba(220, 53, 69, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              {errors.email && (
                <motion.div 
                  className="text-danger mt-2 small"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ fontSize: "0.85rem" }}
                >
                  {errors.email}
                </motion.div>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label text-light mb-2" style={{ fontWeight: "600", fontSize: "0.95rem" }}>
                Password
              </label>
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    padding: "12px 50px 12px 16px",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#dc3545";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.boxShadow = "0 0 0 4px rgba(220, 53, 69, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#999",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: "5px 10px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#dc3545";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#999";
                  }}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
              {errors.password && (
                <motion.div 
                  className="text-danger mt-2 small"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ fontSize: "0.85rem" }}
                >
                  {errors.password}
                </motion.div>
              )}
            </div>

            <div className="d-flex justify-content-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input" 
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "2px solid rgba(255, 255, 255, 0.2)"
                  }}
                />
                <label className="form-check-label text-light ms-2" htmlFor="terms" style={{ fontSize: "0.9rem", cursor: "pointer" }}>
                  Agree to the{" "}
                  <span 
                    onClick={(e) => {
                      e.preventDefault();
                      setShowTermsModal(true);
                    }}
                    style={{ color: "#dc3545", textDecoration: "underline", cursor: "pointer" }}
                    onMouseEnter={(e) => e.target.style.color = "#ff2535"}
                    onMouseLeave={(e) => e.target.style.color = "#dc3545"}
                  >
                    Terms and Conditions
                  </span>
                </label>
              </div>
            </div>
            {errors.terms && (
              <motion.div 
                className="text-danger text-center mb-3 small"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: "0.85rem" }}
              >
                {errors.terms}
              </motion.div>
            )}

            <motion.button 
              className="btn w-100 py-3 mb-4" 
              type="submit"
              style={{
                background: "linear-gradient(135deg, #dc3545 0%, #c82333 100%)",
                border: "none",
                borderRadius: "12px",
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "1px",
                boxShadow: "0 4px 15px rgba(220, 53, 69, 0.4)",
                transition: "all 0.3s ease"
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 6px 20px rgba(220, 53, 69, 0.6)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>

            <div className="text-center">
              <span className="text-light" style={{ fontSize: "0.95rem" }}>Don't have an account? </span>
              <span
                style={{ 
                  color: "#dc3545", 
                  textDecoration: "underline", 
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  transition: "all 0.3s ease"
                }}
                onClick={() => navigate("/register")}
                onMouseEnter={(e) => e.currentTarget.style.color = "#ff4757"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#dc3545"}
              >
                Register now
              </span>
            </div>
          </form>
        </motion.div>
      </motion.div>

      {showTermsModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowTermsModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(5px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px"
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "20px",
              padding: "40px",
              width: "100%",
              maxWidth: "700px",
              maxHeight: "80vh",
              overflow: "auto",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)"
            }}
          >
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              marginBottom: "25px"
            }}>
              <h2 style={{ 
                color: "#fff", 
                fontSize: "28px", 
                fontWeight: "700",
                margin: 0
              }}>
                Terms and Conditions
              </h2>
              <button
                onClick={() => setShowTermsModal(false)}
                style={{
                  background: "rgba(220, 53, 69, 0.2)",
                  border: "1px solid #dc3545",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  color: "#dc3545",
                  fontSize: "20px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#dc3545";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(220, 53, 69, 0.2)";
                  e.currentTarget.style.color = "#dc3545";
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ color: "#ddd", lineHeight: "1.8", fontSize: "15px" }}>
              <h3 style={{ color: "#fff", fontSize: "20px", marginTop: "20px", marginBottom: "15px" }}>
                1. Acceptance of Terms
              </h3>
              <p style={{ marginBottom: "15px" }}>
                By accessing and using RollingCode Music, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h3 style={{ color: "#fff", fontSize: "20px", marginTop: "20px", marginBottom: "15px" }}>
                2. Use License
              </h3>
              <p style={{ marginBottom: "15px" }}>
                Permission is granted to temporarily stream music from RollingCode Music for personal, non-commercial use only. This is the grant of a license, not a transfer of title.
              </p>

              <h3 style={{ color: "#fff", fontSize: "20px", marginTop: "20px", marginBottom: "15px" }}>
                3. User Accounts
              </h3>
              <p style={{ marginBottom: "15px" }}>
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
              </p>

              <h3 style={{ color: "#fff", fontSize: "20px", marginTop: "20px", marginBottom: "15px" }}>
                4. Privacy Policy
              </h3>
              <p style={{ marginBottom: "15px" }}>
                Your use of RollingCode Music is also governed by our Privacy Policy. We collect and use your information in accordance with applicable data protection laws.
              </p>

              <h3 style={{ color: "#fff", fontSize: "20px", marginTop: "20px", marginBottom: "15px" }}>
                5. Content Rights
              </h3>
              <p style={{ marginBottom: "15px" }}>
                All music, graphics, logos, and service marks are the property of their respective owners. You may not reproduce, distribute, or create derivative works without explicit permission.
              </p>

              <h3 style={{ color: "#fff", fontSize: "20px", marginTop: "20px", marginBottom: "15px" }}>
                6. Prohibited Activities
              </h3>
              <p style={{ marginBottom: "15px" }}>
                You agree not to: (a) use the service for any illegal purpose, (b) attempt to gain unauthorized access, (c) interfere with the proper functioning of the service, or (d) upload malicious code.
              </p>

              <h3 style={{ color: "#fff", fontSize: "20px", marginTop: "20px", marginBottom: "15px" }}>
                7. Termination
              </h3>
              <p style={{ marginBottom: "15px" }}>
                We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users.
              </p>

              <h3 style={{ color: "#fff", fontSize: "20px", marginTop: "20px", marginBottom: "15px" }}>
                8. Changes to Terms
              </h3>
              <p style={{ marginBottom: "15px" }}>
                We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
              </p>

              <div style={{ 
                marginTop: "30px", 
                paddingTop: "20px", 
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                textAlign: "center",
                color: "#999",
                fontSize: "13px"
              }}>
                Last updated: February 4, 2026
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowTermsModal(false)}
              style={{
                width: "100%",
                marginTop: "25px",
                padding: "14px",
                background: "linear-gradient(135deg, #dc3545 0%, #c82333 100%)",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(220, 53, 69, 0.4)"
              }}
            >
              I Understand
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Login;