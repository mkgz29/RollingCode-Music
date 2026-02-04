import { authenticateUser } from "../auth/authHelpers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
  setErrors({ email: "User not found. Please register first." });
  return;
}

localStorage.setItem("auth", JSON.stringify(authUser));
navigate("/home");
      
  
  }

  return (
    <div className="max-auto d-flex justify-content-center align-items-center page-bg">
      <div className="col-12 col-md-6 col-lg-4 px-3 px-md-0">


        <h1 id="shadowcd2">Login</h1>
        <span className="required-fields">
          Required Fields *
        </span>

        <form noValidate onSubmit={handleSubmit}>

          <div className="col-lg-9 mx-auto mb-5 w-85">
            <input
              type="email"
              placeholder="E-mail *"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback d-block">
                {errors.email}
              </div>
            )}
          </div>

          <div className="col-lg-9 mx-auto mb-5 w-85">
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password *"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  backgroundColor:"transparent",
                  border:"1px solid rgba(255,255,255,0.4)",
                  color:"#fff",
                  transition:"all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#dc3545";
                  e.currentTarget.style.color = "#dc3545";
                  e.currentTarget.style.backgroundColor = "rgba(220,53,69,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.backgroundColor = "#fff";
              }}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            {errors.password && (
              <div className="invalid-feedback d-block">
                {errors.password}
              </div>
            )}
          </div>

          <div className="col-12 d-flex justify-content-center mt-4 mb-4">
            <div className="form-check">
              <input
                className="form-check-input" 
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              <label className="form-check-label text-light" htmlFor="terms">
                Agree to the{" "}
                <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                  Terms and Conditions
                </span>
              </label>

              {errors.terms && (
                <div className="text-danger mt-1 small">
                  {errors.terms}
                </div>
              )}
            </div>
          </div>

              <div className="col-12 text-center mt-3">
                <span className="text-light">Don't have any account?. </span>
                <span
                style={{textDecoration: "underline", cursor: "pointer"}}
                className="text-light"
                onClick={() => navigate("/register")}
                >
                Register now
                </span>
              </div>

          <div className="col-12 mt-5 text-center">
            <button className="btn btn-danger" type="submit">
              Enter
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;