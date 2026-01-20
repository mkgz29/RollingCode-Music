import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    terms: false
  });

  const [errors, setErrors] = useState({});

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
    if (!formData.username) newErrors.username = "Please choose a username.";
    if (!formData.city) newErrors.city = "Please provide a valid city.";
    if (!formData.terms) newErrors.terms = "You must agree before submitting.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Login</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="validationServer01" className="form-label">First name</label>
          <input 
            type="text" 
            className={`form-control ${formData.firstName && !errors.firstName ? 'is-valid' : ''} ${errors.firstName ? 'is-invalid' : ''}`}
            id="validationServer01" 
            name="firstName"
            value={formData.firstName} 
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">
            Looks good!
          </div>
          {errors.firstName && <div className="invalid-feedback d-block">{errors.firstName}</div>}
        </div>

        <div className="col-md-4">
          <label htmlFor="validationServer02" className="form-label">Last name</label>
          <input 
            type="text" 
            className={`form-control ${formData.lastName && !errors.lastName ? 'is-valid' : ''} ${errors.lastName ? 'is-invalid' : ''}`}
            id="validationServer02" 
            name="lastName"
            value={formData.lastName} 
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">
            Looks good!
          </div>
          {errors.lastName && <div className="invalid-feedback d-block">{errors.lastName}</div>}
        </div>

        <div className="col-md-4">
          <label htmlFor="validationServerUsername" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend3">@</span>
            <input 
              type="text" 
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              id="validationServerUsername" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" 
              required
            />
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>

        <div className="col-md-6 mx-auto">
          <label htmlFor="validationServer03" className="form-label">City</label>
          <input 
            type="text" 
            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
            id="validationServer03" 
            name="city"
            value={formData.city}
            onChange={handleChange}
            aria-describedby="validationServer03Feedback" 
            required
          />
          <div id="validationServer03Feedback" className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input 
              className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
              type="checkbox" 
              id="invalidCheck3" 
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              aria-describedby="invalidCheck3Feedback" 
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div id="invalidCheck3Feedback" className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  );
};

export default Login;