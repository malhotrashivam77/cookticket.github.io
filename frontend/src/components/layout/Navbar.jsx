import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2_nonbg.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  

  return (
    <>
      <style>
        {`
          .navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
}

.nav-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
}

.desktop-menu {
  display: none;
}

.mobile-menu {
  display: block;
  width: 90%;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform-origin: top;
  z-index: 1000;
}

.mobile-menu.hidden {
  transform: scaleY(0);
  opacity: 0;
  pointer-events: none;
}

.mobile-menu.visible {
  transform: scaleY(1);
  opacity: 1;
  pointer-events: auto;
}

.nav-link {
  display: block;
  font-weight: 600;
  color: rgb(241, 140, 74) !important;
  text-decoration: none !important;
  padding: 0.75rem 0rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
}

.nav-link:hover {
  background-color: rgb(241, 140, 74);
  color: white !important;
}

.admin-btn {
  background-color: rgb(241, 140, 74) !important;
  color: white !important;
  border: none !important;
  padding: 0.75rem 1.5rem !important;
  border-radius: 0.5rem !important;
  cursor: pointer;
  transition: all 0.3s ease !important;
  width: 100%;
  text-align: left;
}

.admin-btn:hover {
  background-color: rgb(220, 120, 54) !important;
}

.menu-button {
  background: none;
  border: none;
  color: rgb(241, 140, 74);
  cursor: pointer;
  padding: 1.0rem;
}

.menu-button:focus {
  outline: none;
}

.navbar-content {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

@media (min-width: 1024px) {
  .nav-container {
    max-width: 1200px;
    padding: 0 2rem;
  }

  .mobile-menu-button {
    display: none;
  }

  .desktop-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-link {
    width: auto;
    padding: 0.5rem 1rem;
  }

  .admin-btn {
    width: auto;
    padding: 0.5rem 1.5rem !important;
  }

  .mobile-menu {
    display: none !important;
  }
}

        `}
      </style>

      <div className="navbar-wrapper">
        <div className="nav-container">
          <div className="navbar-content">
            {/* Logo and Text */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "rgb(241, 140, 74)",
              }}
            >
              <img
                src= {logo} // Replace with your own logo
                alt="CookTicket Logo"
                style={{ width: "40px", height: "auto", marginRight: "5px" }}
              />
              COOKTICKET
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu">
              <a href="#" className="nav-link">
                Home
              </a>
              <a href="#" className="nav-link">
                Packages
              </a>
              <a href="#" className="nav-link">
                Ticket Booking
              </a>
              <a href="#" className="nav-link">
                About Us
              </a>
              <button
                onClick={() => navigate("/admin/login")}
                className="admin-btn"
              >
                Admin Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="menu-button mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isOpen ? "visible" : "hidden"}`}>
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Packages
            </a>
            <a href="#" className="nav-link">
              Ticket Booking
            </a>
            <a href="#" className="nav-link">
              About Us
            </a>
            <button
              onClick={() => {
                navigate("/admin/login");
                setIsOpen(false);
              }}
              className="admin-btn"
            >
              Admin Login
            </button>
          </div>
        </div>
      </div>

      <div style={{ height: "4rem" }} />
    </>
  );
};

export default Navbar;