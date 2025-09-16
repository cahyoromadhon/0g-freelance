import React from 'react';

const ProfileCard: React.FC = () => (
  <section className="profile-card">
    <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="User Avatar" />
    <h2>Satoshi Nakamoto</h2>
    <p>Fullstack | Smart Contracts | AI Enthusiast</p>
    <div>
      <span>Wallet: 0x1234...abcd</span>
      <span>Reputation: 4.8 ★</span>
    </div>
    <button>Connect Wallet</button>
    <button>Edit Profile</button>
  </section>
);

export default ProfileCard;