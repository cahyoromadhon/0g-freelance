import React, { useState } from "react";
import { FaWallet, FaBars, FaTimes } from "react-icons/fa";


interface NavbarProps {
  scrollToJobs: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToJobs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleNavClick = (cb?: () => void) => {
    setMenuOpen(false);
    if (cb) cb();
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src="/fugo.svg" alt="Logo" className="logo" />
        <span className="brand">Bitlance</span>
      </div>
      <button className="navbar-hamburger" onClick={handleMenuToggle} aria-label="Toggle menu">
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>
      {menuOpen && <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />}
      <nav className={`navbar-nav${menuOpen ? " open" : ""}`}>
        <a href="/" onClick={() => handleNavClick()}>Home</a>
        <a href="#dashboard" onClick={() => handleNavClick()}>Dashboard</a>
        <button className="nav-link" onClick={() => handleNavClick(scrollToJobs)}>Jobs</button>
        <a href="#governance" onClick={() => handleNavClick()}>Governance</a>
        <a href="#docs" onClick={() => handleNavClick()}>Docs</a>
      </nav>
      <div className="navbar-actions">
        <button className="wallet-btn">
          <FaWallet size={18} style={{marginRight: 8}} />
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Navbar;