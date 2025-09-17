import React, { useState } from "react";
import { FaWallet, FaBars, FaTimes } from "react-icons/fa";
import ComingSoonModal from "./ComingSoonModal";

interface NavbarProps {
  scrollToJobs: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToJobs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFeature, setModalFeature] = useState("");

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleNavClick = (cb?: () => void) => {
    setMenuOpen(false);
    if (cb) cb();
  };

  const showComingSoon = (feature: string) => {
    setModalFeature(feature);
    setModalOpen(true);
    setMenuOpen(false);
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
        <button className="nav-link" onClick={() => showComingSoon("Dashboard")}>Dashboard</button>
        <button className="nav-link" onClick={() => handleNavClick(scrollToJobs)}>Jobs</button>
        <button className="nav-link" onClick={() => showComingSoon("Governance")}>Governance</button>
        <button className="nav-link" onClick={() => showComingSoon("Documentation")}>Docs</button>
      </nav>
      <div className="navbar-actions">
        <button className="wallet-btn" onClick={() => showComingSoon("Wallet Connection")}>
          <FaWallet size={18} style={{marginRight: 8}} />
          Connect Wallet
        </button>
      </div>
      
      <ComingSoonModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        feature={modalFeature}
      />
    </header>
  );
};

export default Navbar;