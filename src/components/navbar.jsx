import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logonavbar.png";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="btn btn-dark d-lg-none position-fixed m-2" 
        style={{ top: '0', left: '0', zIndex: 1050 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
          display: 'inline-block',
          width: '1.5em',
          height: '1.5em'
        }}></span>
      </button>

      <nav 
        className={`bg-black text-white d-flex flex-column vh-100 position-fixed ${isOpen ? '' : 'd-none'} d-lg-flex`} 
        style={{ 
          width: '250px', 
          left: 0, 
          top: 0,
          zIndex: 1040
        }}
      >
        <div className="text-center py-4 border-bottom border-secondary">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img 
              src={logo} 
              alt="RollingCode Music Logo" 
              style={{ 
                height: '70px', 
                width: 'auto',
                maxWidth: '100%'
              }} 
            />
          </Link>
        </div>
        <ul className="nav flex-column flex-grow-1 mt-4 px-3">
          <li className="nav-item mb-2">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center gap-3 px-3 py-2 rounded ${isActive ? 'bg-danger' : ''}`
              }
              to="/" 
              onClick={() => setIsOpen(false)}
            >
              <AiFillHome size={22} />
              <span style={{ fontSize: '16px', fontWeight: '500' }}>Home</span>
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center gap-3 px-3 py-2 rounded ${isActive ? 'bg-danger' : ''}`
              }
              to="/about" 
              onClick={() => setIsOpen(false)}
            >
              <BsInfoCircle size={22} />
              <span style={{ fontSize: '16px', fontWeight: '500' }}>About</span>
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink 
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center gap-3 px-3 py-2 rounded ${isActive ? 'bg-danger' : ''}`
              }
              to="/admin" 
              onClick={() => setIsOpen(false)}
            >
              <MdAdminPanelSettings size={22} />
              <span style={{ fontSize: '16px', fontWeight: '500' }}>Admin</span>
            </NavLink>
          </li>
        </ul>
        <div className="d-flex flex-column gap-2 px-3 pb-4 border-top border-secondary pt-3">
          <NavLink 
            className="btn btn-outline-light w-100 py-2" 
            to="/register" 
            onClick={() => setIsOpen(false)}
            style={{ fontSize: '15px', fontWeight: '500' }}
          >
            Register
          </NavLink>
          <NavLink 
            className="btn btn-danger w-100 py-2" 
            to="/login" 
            onClick={() => setIsOpen(false)}
            style={{ fontSize: '15px', fontWeight: '500' }}
          >
            Login
          </NavLink>
        </div>
      </nav>

      {/* Overlay oscuro cuando el menú está abierto en móvil */}
      {isOpen && (
        <div 
          className="d-lg-none position-fixed w-100 h-100" 
          style={{ top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1030 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;