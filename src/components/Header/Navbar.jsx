// Navbar.js
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import brandLogo from "../../assets/ironhack.webp";
import "./Navbar.css";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img className="brandlogo-img" src={brandLogo} alt="Logo" />
      </Link>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>

          {isLoggedIn ? (
            <Link className="nav-link" to="/resumes">
              My Resumés
            </Link>
          ) : (
            <>
              <Link
                className="nav-link btn btn-outline-light mr-2"
                to="/signup"
              >
                Sign Up
              </Link>
              <Link className="nav-link btn btn-outline-light" to="/login">
                Login
              </Link>
            </>
          )}

          {isLoggedIn && (
            <span className="navbar-text">
              {user && user.email} is logged in!
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
