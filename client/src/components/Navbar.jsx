import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn, LogoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    LogoutUser();
    navigate('/login');
  };

  return (
    <header>
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">Tech Talk</NavLink>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/service">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            {isLoggedIn ? (
              <li><a href="#" onClick={handleLogout}>Logout</a></li>
            ) : (
              <>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
