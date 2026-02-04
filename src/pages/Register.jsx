import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";

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
    background: "#343a40",
    color: "#ffffff",
  }).then(() => {
    navigate("/login");
  });
 };

  return (
    <div className="conteiner-fluid min-vh-100 d-flex justify-content-center align-items-center page-bg">
      <form className="col g-2 px-3 px-sm-4px-md-0" onSubmit={handleSubmit} noValidate>
        <h1 className="mb-5 text-light text-center">Register</h1>
        <span className="required-fields2">
          Required Fields *
        </span>
        <div className="col-lg-3 mb-3 mx-auto">
          <label htmlFor="validationServer01" className="form-label text-light"></label>
          <input
            type="text"
            placeholder="Name *"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <div className="invalid-feedback d-block">
              {errors.firstName}
            </div>
          )}
        </div>
        <div className="col-lg-3 mb-3 mx-auto">
          <label htmlFor="validationServer02" className="form-label text-light"></label>
          <input
            type="text"
            placeholder="Last Name *"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          {errors.lastName && <div className="invalid-feedback d-block">{errors.lastName}</div>}
        </div>

        <div className="col-lg-3 mb-3 mx-auto">
          <label htmlFor="validationServerUsername" className="form-label text-light"></label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend3">@</span>
            <input
              type="text"
              placeholder="E-mail *"
              className={`form-control ${errors.Email ? 'is-invalid' : ''}`}
              name="Email"
              value={formData.Email}
              onChange={handleChange}
            />
            {errors.Email && (
              <div className="invalid-feedback d-block">
                {errors.Email}
              </div>
            )}
          </div>
        </div>

        <div className="col-lg-3 mb-3 mx-auto">
          <label htmlFor="validationServer03" className="form-label text-light"> </label>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              className={`form-control ${formData.password && !errors.password ? 'is-valid' : ''}`}
              name="password"
              value={formData.password}
              onChange={handleChange}
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

        <div className="col-lg-3 mb-3 mx-auto">
          <label htmlFor="validationServer03" className="form-label text-light"> </label>

          <div className="input-group">
            <input
              type={showRepeatPassword ? "text" : "password"}
              placeholder="Repeat Password *"
              className={`form-control ${formData.repeatPassword && !errors.repeatPassword ? 'is-valid' : ''} ${errors.repeatPassword ? 'is-invalid' : ''}`}
              id="validationServer03"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() => setShowRepeatPassword(!showRepeatPassword)}
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
              {showRepeatPassword ? "🙈" : "👁"}
            </button>
          </div>

          {errors.repeatPassword && (
            <div className="invalid-feedback d-block">
              {errors.repeatPassword}
            </div>
          )}
        </div>

        <div className="col-12 d-flex max-auto justify-content-center mt-4">
          <div className="form-check">
            <input
              className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            {errors.terms && (
              <div className="invalid-feedback d-block">
                {errors.terms}
              </div>
            )}
            <label className="form-check-label text-light " htmlFor="terms">
              Agree to the <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                Terms and Conditions
              </span>
            </label>


          </div>
        </div>

        <div className="col-12 mt-5">
          <button className="btn btn-danger" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;