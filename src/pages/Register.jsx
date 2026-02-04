import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import logo from "../assets/img/logonavbar.png";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    password: "",
    repeatPassword: "",
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formData.firstName) newErrors.firstName = "Please enter first name.";
  if (!formData.lastName) newErrors.lastName = "Please enter last name.";

  if (!formData.Email) {
    newErrors.Email = "Please Email is required.";
  } else if (!formData.Email.includes("@")) {
    newErrors.Email = "Please Email must contain @.";
  }

  if (!formData.password) {
    newErrors.password = "Please provide a password.";
  } else if (formData.password.length < 8) {
    newErrors.password = "Password must be at least 8 characters long.";
  }

  if (formData.password !== formData.repeatPassword) {
    newErrors.repeatPassword = "Passwords do not match.";
  }

  if (!formData.terms) {
    newErrors.terms = "You must agree before submitting.";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length !== 0) return;

  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = existingUsers.some(
    (user) => user.email === formData.Email
  );

  if (userExists) {
    setErrors({ Email: "Email is already registered." });
    return;
  }

  const newUser = {
    email: formData.Email,
    password: formData.password,
    role: "user",
  };

  existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUsers));

  localStorage.removeItem("auth");

  Swal.fire({
    icon: "success",
    title: "Registration Successful",
    text: "You have registered successfully. Please log in.",
    confirmButtonText: "OK",
    confirmButtonColor: "#dc3545",
    background: "#1a1a1a",
    color: "#ffffff",
    timer: 2500,
    timerProgressBar: true,
  }).then(() => {
    navigate("/login");
  });
 };

  return (
    <div 
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden"
      }}
    >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "40px",
          width: "100%",
          maxWidth: "450px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          <img 
            src={logo} 
            alt="RollingCode Music" 
            style={{ 
              height: "80px",
              filter: "drop-shadow(0 0 20px rgba(255, 2, 27, 0.5))"
            }} 
          />
        </motion.div>

        <h1 style={{ 
          color: "#fff", 
          textAlign: "center", 
          marginBottom: "10px",
          fontSize: "32px",
          fontWeight: "700",
          textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
        }}>
          Create Account
        </h1>
        
        <p style={{
          color: "#999",
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "14px"
        }}>
          Join the RollingCode Music community
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              color: "#ddd", 
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${errors.firstName ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                borderRadius: "12px",
                color: "#fff",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                if (!errors.firstName) {
                  e.target.style.borderColor = "#dc3545";
                  e.target.style.boxShadow = "0 0 0 4px rgba(220, 53, 69, 0.1)";
                }
              }}
              onBlur={(e) => {
                if (!errors.firstName) {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.target.style.boxShadow = "none";
                }
              }}
            />
            {errors.firstName && (
              <div style={{ color: "#dc3545", fontSize: "13px", marginTop: "6px" }}>
                {errors.firstName}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              color: "#ddd", 
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${errors.lastName ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                borderRadius: "12px",
                color: "#fff",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                if (!errors.lastName) {
                  e.target.style.borderColor = "#dc3545";
                  e.target.style.boxShadow = "0 0 0 4px rgba(220, 53, 69, 0.1)";
                }
              }}
              onBlur={(e) => {
                if (!errors.lastName) {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.target.style.boxShadow = "none";
                }
              }}
            />
            {errors.lastName && (
              <div style={{ color: "#dc3545", fontSize: "13px", marginTop: "6px" }}>
                {errors.lastName}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              color: "#ddd", 
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              Email
            </label>
            <div style={{ position: "relative" }}>
              <span style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#999",
                fontSize: "16px",
                pointerEvents: "none"
              }}>@</span>
              <input
                type="email"
                placeholder="your@email.com"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 16px 12px 40px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: `1px solid ${errors.Email ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "15px",
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => {
                  if (!errors.Email) {
                    e.target.style.borderColor = "#dc3545";
                    e.target.style.boxShadow = "0 0 0 4px rgba(220, 53, 69, 0.1)";
                  }
                }}
                onBlur={(e) => {
                  if (!errors.Email) {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.boxShadow = "none";
                  }
                }}
              />
            </div>
            {errors.Email && (
              <div style={{ color: "#dc3545", fontSize: "13px", marginTop: "6px" }}>
                {errors.Email}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              color: "#ddd", 
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 50px 12px 16px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: `1px solid ${errors.password ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "15px",
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => {
                  if (!errors.password) {
                    e.target.style.borderColor = "#dc3545";
                    e.target.style.boxShadow = "0 0 0 4px rgba(220, 53, 69, 0.1)";
                  }
                }}
                onBlur={(e) => {
                  if (!errors.password) {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.boxShadow = "none";
                  }
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
                  background: "transparent",
                  border: "none",
                  color: "#999",
                  cursor: "pointer",
                  fontSize: "18px",
                  padding: "4px 8px",
                  transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#dc3545"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#999"}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
            {errors.password && (
              <div style={{ color: "#dc3545", fontSize: "13px", marginTop: "6px" }}>
                {errors.password}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              color: "#ddd", 
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: "500"
            }}>
              Confirm Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showRepeatPassword ? "text" : "password"}
                placeholder="Confirm your password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 50px 12px 16px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: `1px solid ${errors.repeatPassword ? '#dc3545' : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "15px",
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => {
                  if (!errors.repeatPassword) {
                    e.target.style.borderColor = "#dc3545";
                    e.target.style.boxShadow = "0 0 0 4px rgba(220, 53, 69, 0.1)";
                  }
                }}
                onBlur={(e) => {
                  if (!errors.repeatPassword) {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.boxShadow = "none";
                  }
                }}
              />
              <button
                type="button"
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "#999",
                  cursor: "pointer",
                  fontSize: "18px",
                  padding: "4px 8px",
                  transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#dc3545"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#999"}
              >
                {showRepeatPassword ? "🙈" : "👁"}
              </button>
            </div>
            {errors.repeatPassword && (
              <div style={{ color: "#dc3545", fontSize: "13px", marginTop: "6px" }}>
                {errors.repeatPassword}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "25px", marginTop: "25px" }}>
            <label style={{ 
              display: "flex", 
              alignItems: "center",
              cursor: "pointer",
              userSelect: "none"
            }}>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                style={{
                  width: "18px",
                  height: "18px",
                  marginRight: "10px",
                  cursor: "pointer",
                  accentColor: "#dc3545"
                }}
              />
              <span style={{ 
                color: "#ddd", 
                fontSize: "14px" 
              }}>
                I agree to the{" "}
                <span 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTermsModal(true);
                  }}
                  style={{ 
                    color: "#dc3545", 
                    textDecoration: "underline",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "#ff2535"}
                  onMouseLeave={(e) => e.target.style.color = "#dc3545"}
                >
                  Terms and Conditions
                </span>
              </span>
            </label>
            {errors.terms && (
              <div style={{ color: "#dc3545", fontSize: "13px", marginTop: "6px" }}>
                {errors.terms}
              </div>
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: "100%",
              padding: "14px",
              background: "linear-gradient(135deg, #dc3545 0%, #c82333 100%)",
              border: "none",
              borderRadius: "12px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(220, 53, 69, 0.4)",
              transition: "all 0.3s ease"
            }}
          >
            Create Account
          </motion.button>

          <div style={{ 
            textAlign: "center", 
            marginTop: "20px",
            color: "#999",
            fontSize: "14px"
          }}>
            Already have an account?{" "}
            <Link 
              to="/login"
              style={{ 
                color: "#dc3545", 
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
              onMouseLeave={(e) => e.target.style.textDecoration = "none"}
            >
              Sign In
            </Link>
          </div>
        </form>
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

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
};

export default Register;