import React from "react";
import { FaBolt, FaLock, FaRobot, FaUsers, FaWallet, FaPlay } from "react-icons/fa";

const HeroSection: React.FC = () => {
  const scrollToJobs = () => {
    const jobsSection = document.getElementById("jobs");
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-badge">
        <FaBolt style={{ marginRight: 5 }} />
        AI-powered & Web3-secured Freelance Platform
      </div>
      <h1>
        <span className="gradient-purple">Seamless <br/> Web3 Freelance</span>
        <br /><span className="ai-matching">with <b>AI Matching</b></span>
      </h1>
      <p className="hero-desc">
        Platform freelance masa depan: pembayaran terdesentralisasi, integrasi AI, dan peluang global untuk semua kreator & klien.
      </p>
      <div className="hero-icons">
        <span><FaLock /> Secure</span>
        <span><FaRobot /> AI Match</span>
        <span><FaUsers /> Community</span>
      </div>
      <div className="hero-actions">
        <button className="wallet-btn-lg">
          <FaWallet style={{marginRight: 8}} /> Connect Wallet
        </button>
        <button className="explore-btn" onClick={scrollToJobs}>
          <FaPlay style={{marginRight:7}} />
          Explore Jobs
        </button>
      </div>
    </section>
  );
};

export default HeroSection;