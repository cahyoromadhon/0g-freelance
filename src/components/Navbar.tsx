import React from "react";
import { FaWallet } from "react-icons/fa";

const Navbar: React.FC = () => (
  <header className="navbar">
    <div className="navbar-left">
      <img src="/fugo.svg" alt="Logo" className="logo" />
      <span className="brand">Fugo</span>
    </div>
    <nav className="navbar-nav">
      <a href="/">Home</a>
      <a href="#dashboard">Dashboard</a>
      <a href="#jobs">Jobs</a>
      <a href="#governance">Governance</a>
      <a href="#docs">Docs</a>
    </nav>
    <div className="navbar-actions">
      <button className="wallet-btn">
        <FaWallet size={18} style={{marginRight: 8}} />
        Connect Wallet
      </button>
    </div>
  </header>
);

export default Navbar;