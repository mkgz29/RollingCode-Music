import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo2navbar.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="130" height="100" />
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/detail">
                Detail
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>

          </ul>

          {/* Search (visual por ahora) */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
