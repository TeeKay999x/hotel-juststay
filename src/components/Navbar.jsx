import React, { useState } from 'react'
import { X, Menu, LogOut } from 'lucide-react'


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Mobile Menu Icon (Left side as per your video) */}
        <div className="mobile-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Logo (Centered on mobile, Left on desktop) */}
        <div className="nav-logo">
          Just<span>Stay</span>
        </div>

        {/* Links (Hidden on mobile unless toggled) */}
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li><a href="#home" onClick={() => setIsMobile(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMobile(false)}>About</a></li>
          <li><a href="#rooms" onClick={() => setIsMobile(false)}>Rooms</a></li>
          <li><a href="#services" onClick={() => setIsMobile(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setIsMobile(false)}>Contact</a></li>
        </ul>

        {/* Logout (Right side) */}
        <div className="nav-actions">
          <button className="logout-btn">
            <span className="logout-text">Logout</span>
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar