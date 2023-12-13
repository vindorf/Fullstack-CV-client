import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthenticationPage.css";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignupSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { email, password };
      await axios.post(`${API_URL}/auth/signup`, requestBody);
      navigate("/login");
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div className="AuthenticationContainer">
      <h3>Sign Up</h3>

      <form onSubmit={handleSignupSubmit}>
        <div className="form-group">
          <label className="text-muted form-control-label">Email</label>
          <input
            className="form-control custom-form-control"
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />

          <label className="text-muted form-control-label">Password</label>
          <input
            className="form-control custom-form-control"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        <button type="submit" className="btn submit-btn">
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="cta">
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;
