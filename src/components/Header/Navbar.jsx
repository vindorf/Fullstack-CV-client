// Navbar.js
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import "./Navbar.css";

function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="navbar-nav navbar-right">
        <Link className="nav-link" to="/">
          Home
        </Link>

        {isLoggedIn ? (
          <>
            <Link className="nav-link" to="/resumes">
              My Resumés
            </Link>
            <Link className="nav-link" onClick={logOutUser}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
