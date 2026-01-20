import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logonavbar.png";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand mr-4" to="/">
          <img src={logo} alt="Logo"  height="40" />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-flex justify-content-start mb-2 mb-lg-0 " style={{ gap: '2rem' }}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home  <AiFillHome size={20} />
                
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About  <BsInfoCircle size={20} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
              Admin  <MdAdminPanelSettings size={20} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/detail">
                Detail <FaMusic size={20} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login <RiLoginCircleFill size={20} />
              </NavLink>
            </li>

          </ul>
                    <NavLink className="btn btn-outline-danger m-3" to="/register">
            Register
          </NavLink>
                      <NavLink className="btn btn-outline-danger m-3" to="/login">
            Login
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
