import React from 'react';
import { FaEthereum, FaRobot, FaUserTie, FaUserSecret, FaClock, FaGift } from "react-icons/fa";

const dummyJobs = [
  {
    id: 1,
    title: "Smart Contract Developer",
    description: "Build and audit smart contracts for DeFi applications. Experience with Solidity, Hardhat, and OpenZeppelin required. Must implement complex DeFi protocols including AMM and yield farming mechanisms.",
    reward: "0.5 ETH",
    status: "Ongoing",
    badge: "Web3",
    avatar: <FaEthereum />,
  },
  {
    id: 2,
    title: "AI Copywriting Specialist",
    description: "Generate high-converting marketing copy using advanced AI tools like GPT-4 and Claude. Create compelling content for Web3 startups, NFT projects, and DeFi platforms. Portfolio review required.",
    reward: "$400 USDT",
    status: "In Review",
    badge: "AI",
    avatar: <FaRobot />,
  },
  {
    id: 3,
    title: "Frontend Engineer",
    description: "Develop responsive and interactive dApp frontends using React, TypeScript, and Web3.js. Integration with MetaMask, WalletConnect, and multiple blockchain networks. Modern UI/UX design skills preferred.",
    reward: "0.35 ETH",
    status: "Ongoing",
    badge: "Frontend",
    avatar: <FaUserTie />,
  },
  {
    id: 4,
    title: "AI Prompt Engineer",
    description: "Design and optimize AI prompt workflows for creative and technical tasks. Experience with prompt engineering, fine-tuning models, and AI automation tools. Knowledge of LangChain and vector databases.",
    reward: "$300 USDT",
    status: "Completed",
    badge: "Prompt",
    avatar: <FaRobot />,
  },
  {
    id: 5,
    title: "Solidity Auditor",
    description: "Comprehensive security review and audit of Solidity smart contracts. Identify vulnerabilities, gas optimizations, and provide detailed security reports. Certifications from ConsenSys or Trail of Bits preferred.",
    reward: "1 ETH",
    status: "In Review",
    badge: "Security",
    avatar: <FaUserSecret />,
  },
  {
    id: 6,
    title: "Community Manager",
    description: "Build and engage Web3 communities across Discord, Telegram, and Twitter. Create content strategies, manage social media campaigns, and coordinate with development teams for product launches.",
    reward: "0.2 ETH",
    status: "Ongoing",
    badge: "Community",
    avatar: <FaUserTie />,
  },
];

const JobList: React.FC = () => (
  <section id="jobs" className="job-list">
    <h2>Latest Jobs</h2>
    <div className="job-grid">
      {dummyJobs.map(job => (
        <div key={job.id} className="job-card">
          <span className="job-badge">{job.badge}</span>
          <span className="job-avatar">{job.avatar}</span>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <div className="job-details">
            <div className="job-reward">
              <FaGift className="detail-icon" />
              <span className="reward-label">Reward:</span>
              <span className="reward-value">{job.reward}</span>
            </div>
            <div className="job-status">
              <FaClock className="detail-icon" />
              <span className="status-label">Status:</span>
              <span className="status-value" data-status={job.status}>{job.status}</span>
            </div>
          </div>
          <button className="apply-btn">
            <FaEthereum /> Apply
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default JobList;