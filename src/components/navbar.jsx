import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h2>RollingCode Music</h2>

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/admin">
            Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/subscribe">
            Subscribe
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

/* Error en renombrar componente navbar, envez de "Navbar" > nos da un error cuando importamos el componente en Home con la N mayuscula por 
ello dejamos el nombre del componente en navbar con minusculas,*/
