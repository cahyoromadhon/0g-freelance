import React, { useState } from "react";
import { FaBolt, FaLock, FaRobot, FaUsers, FaWallet, FaPlay } from "react-icons/fa";
import ComingSoonModal from "./ComingSoonModal";

interface HeroSectionProps {
  scrollToJobs: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToJobs }) => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  return (
    <section className="hero-section">
      <div className="hero-badge">
        <FaBolt style={{ marginRight: 7 }} />
        AI-powered & Web3-secured Freelance Platform
      </div>
      <h1>
        <span className="gradient-purple">Seamless <br/> Web3 Freelance</span>
        <br />
        <span className="ai-matching">with <b>AI Matching</b></span>
      </h1>
      <p className="hero-desc">
        The future of freelancing: decentralized payments, AI integration, and global opportunities for all creators & clients.
      </p>
      <div className="hero-icons">
        <span><FaLock /> Secure</span>
        <span><FaRobot /> AI Match</span>
        <span><FaUsers /> Community</span>
      </div>
      <div className="hero-actions">
        <button className="wallet-btn-lg" onClick={() => setIsWalletModalOpen(true)}>
          <FaWallet style={{marginRight: 12}} /> Connect Wallet
        </button>
  <button className="explore-btn" onClick={scrollToJobs}>
          <FaPlay style={{marginRight:12}} />
          Explore Jobs
        </button>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Bitlance. All rights reserved.
      </div>
      
      <ComingSoonModal 
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        feature="Wallet Connection"
      />
    </section>
  );
};

export default HeroSection;