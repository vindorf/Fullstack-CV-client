import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "./AuthenticationPage.css"; // Your additional CSS file

const API_URL = "http://localhost:5005";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { email, password };
      const response = await axios.post(`${API_URL}/auth/login`, requestBody);

      console.log("JWT token", response.data.authToken);
      storeToken(response.data.authToken);
      authenticateUser();
      navigate("/");
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div className="AuthenticationContainer">
      <h3>Login</h3>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label className="text-muted form-control-label">Email:</label>
          <input
            type="email"
            className="form-control custom-form-control"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="form-group ">
          <label className="text-muted form-control-label">Password:</label>
          <input
            type="password"
            className="form-control custom-form-control"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button type="submit" className="btn submit-btn">
          Login
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="cta">
        <p>Don't have an account yet?</p>
        <Link to={"/signup"}> Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
