import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/resumes">
            <button>My resumés</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>
          <br></br>
          <span>{user && user.email} is logged in!</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button type="button" className="btn btn-dark">
              Sign Up
            </button>{" "}
            <button type="button" className="btn btn-dark">
              Primary
            </button>
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
