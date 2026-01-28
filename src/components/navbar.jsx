import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
  <h2>RollingCode Music</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/subscribe">Subscribe</Link></li>
      </ul>
        </nav>
    )
};

export default Navbar;

/* Error en renombrar componente navbar, envez de "Navbar" > nos da un error cuando importamos el componente en Home con la N mayuscula por 
ello dejamos el nombre del componente en navbar con minusculas,*/