import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/logonavbar.png";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaMusic, FaCrown, FaUserCog } from "react-icons/fa";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Navbar = ({ onSearchToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const auth = JSON.parse(localStorage.getItem("auth"));
      setIsAuthenticated(auth?.isAuthenticated || false);
      setUserRole(auth?.role || null);
    };
    
    checkAuth();
    window.addEventListener('storage', checkAuth);
    
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      background: "#1a1a1a",
      color: "#fff",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("auth");
        setIsAuthenticated(false);
        setIsOpen(false);
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "See you soon!",
          background: "#1a1a1a",
          color: "#fff",
          confirmButtonColor: "#dc3545",
          timer: 1500,
          timerProgressBar: true
        }).then(() => {
          navigate("/login");
        });
      }
    });
  };

  return (
    <>
      <button
        className="btn btn-dark d-lg-none position-fixed m-2"
        style={{ top: "0", left: "0", zIndex: 1050 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="navbar-toggler-icon"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
            display: "inline-block",
            width: "1.5em",
            height: "1.5em",
          }}
        ></span>
      </button>

      <button
        className="btn btn-dark d-lg-none position-fixed m-2"
        style={{ top: "0", right: "0", zIndex: 1050 }}
        onClick={onSearchToggle}
      >
        <IoIosSearch size={24} />
      </button>

      <nav
        className={`bg-black text-white d-flex flex-column vh-100 position-fixed ${isOpen ? "" : "d-none"} d-lg-flex`}
        style={{
          width: "250px",
          left: 0,
          top: 0,
          zIndex: 1040,
          boxShadow: "2px 0 10px rgba(0, 0, 0, 0.5)"
        }}
      >
        <div className="text-center py-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src={logo}
              alt="RollingCode Music Logo"
              style={{
                height: "80px",
                width: "auto",
                maxWidth: "100%",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
          </Link>
        </div>
        <ul className="nav flex-column flex-grow-1 mt-2 px-3">
          <li className="nav-item mb-1">
            <NavLink
              to="/home"
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "linear-gradient(135deg, #dc3545 0%, #c82333 100%)" : "transparent",
                background: isActive ? "linear-gradient(135deg, #dc3545 0%, #c82333 100%)" : "transparent",
                transition: "all 0.3s ease",
                borderLeft: isActive ? "4px solid #fff" : "4px solid transparent"
              })}
              className="nav-link text-white d-flex align-items-center gap-3 px-3 py-3 rounded"
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.backgroundColor = "rgba(220, 53, 69, 0.2)";
                  e.currentTarget.style.paddingLeft = "20px";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.paddingLeft = "12px";
                }
              }}
            >
              <AiFillHome size={24} />
              <span style={{ fontSize: "16px", fontWeight: "600" }}>Home</span>
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "linear-gradient(135deg, #dc3545 0%, #c82333 100%)" : "transparent",
                background: isActive ? "linear-gradient(135deg, #dc3545 0%, #c82333 100%)" : "transparent",
                transition: "all 0.3s ease",
                borderLeft: isActive ? "4px solid #fff" : "4px solid transparent"
              })}
              className="nav-link text-white d-flex align-items-center gap-3 px-3 py-3 rounded"
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.backgroundColor = "rgba(220, 53, 69, 0.2)";
                  e.currentTarget.style.paddingLeft = "20px";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.paddingLeft = "12px";
                }
              }}
            >
              <BsInfoCircle size={24} />
              <span style={{ fontSize: "16px", fontWeight: "600" }}>About</span>
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink
              to="/subscribe"
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "linear-gradient(135deg, #dc3545 0%, #c82333 100%)" : "transparent",
                background: isActive ? "linear-gradient(135deg, #dc3545 0%, #c82333 100%)" : "transparent",
                transition: "all 0.3s ease",
                borderLeft: isActive ? "4px solid #fff" : "4px solid transparent"
              })}
              className="nav-link text-white d-flex align-items-center gap-3 px-3 py-3 rounded"
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.backgroundColor = "rgba(220, 53, 69, 0.2)";
                  e.currentTarget.style.paddingLeft = "20px";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.paddingLeft = "12px";
                }
              }}
            >
              <FaCrown size={24} />
              <span style={{ fontSize: "16px", fontWeight: "600" }}>Subscribe</span>
            </NavLink>
          </li>
          {userRole === "admin" && (
            <li className="nav-item mb-1">
              <NavLink
                to="/admin"
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "linear-gradient(135deg, #dc3545 0%, #c82333 100%)" : "transparent",
                  background: isActive ? "linear-gradient(135deg, #dc3545 0%, #c82333 100%)" : "transparent",
                  transition: "all 0.3s ease",
                  borderLeft: isActive ? "4px solid #fff" : "4px solid transparent"
                })}
                className="nav-link text-white d-flex align-items-center gap-3 px-3 py-3 rounded"
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = "rgba(220, 53, 69, 0.2)";
                    e.currentTarget.style.paddingLeft = "20px";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.paddingLeft = "12px";
                  }
                }}
              >
                <MdAdminPanelSettings size={24} />
                <span style={{ fontSize: "16px", fontWeight: "600" }}>Admin</span>
              </NavLink>
            </li>
          )}
        </ul>
        <div className="d-flex flex-column gap-3 px-3 pb-4 pt-3">
          {!isAuthenticated ? (
            <>
              <NavLink
                className="btn btn-outline-light w-100 py-2"
                to="/register"
                onClick={() => setIsOpen(false)}
                style={{ 
                  fontSize: "15px", 
                  fontWeight: "600",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  transition: "all 0.3s ease",
                  borderRadius: "10px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Register
              </NavLink>
              <NavLink
                className="btn btn-danger w-100 py-2"
                to="/login"
                onClick={() => setIsOpen(false)}
                style={{ 
                  fontSize: "15px", 
                  fontWeight: "600",
                  background: "linear-gradient(135deg, #dc3545 0%, #c82333 100%)",
                  border: "none",
                  transition: "all 0.3s ease",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(220, 53, 69, 0.3)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 15px rgba(220, 53, 69, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(220, 53, 69, 0.3)";
                }}
              >
                Login
              </NavLink>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-light w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                onClick={() => {
                  setIsOpen(false);
                  if (userRole === "admin") {
                    navigate("/admin");
                  } else {
                    navigate("/notfound");
                  }
                }}
                style={{ 
                  fontSize: "15px", 
                  fontWeight: "600",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  transition: "all 0.3s ease",
                  borderRadius: "10px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaUserCog size={18} />
                Settings
              </button>
              <button
                className="btn btn-danger w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                onClick={handleLogout}
                style={{ 
                  fontSize: "15px", 
                  fontWeight: "600",
                  background: "linear-gradient(135deg, #dc3545 0%, #c82333 100%)",
                  border: "none",
                  transition: "all 0.3s ease",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(220, 53, 69, 0.3)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 15px rgba(220, 53, 69, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(220, 53, 69, 0.3)";
                }}
              >
                <RiLogoutCircleFill size={18} />
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Overlay oscuro cuando el menú está abierto en móvil */}
      {isOpen && (
        <div
          className="d-lg-none position-fixed w-100 h-100"
          style={{
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1030,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
