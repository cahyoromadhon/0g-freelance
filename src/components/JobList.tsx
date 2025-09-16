import React from 'react';
import { FaEthereum, FaRobot, FaUserTie, FaUserSecret } from "react-icons/fa";

const dummyJobs = [
  {
    id: 1,
    title: "Smart Contract Developer",
    description: "Build and audit smart contracts for DeFi dApps.",
    payment: "0.5 ETH",
    badge: "Web3",
    avatar: <FaEthereum />,
  },
  {
    id: 2,
    title: "AI Copywriting Specialist",
    description: "Generate marketing copy using AI tools.",
    payment: "$400 USDT",
    badge: "AI",
    avatar: <FaRobot />,
  },
  {
    id: 3,
    title: "Frontend Engineer",
    description: "Develop modern dApp frontends with React & Web3.js.",
    payment: "0.35 ETH",
    badge: "Frontend",
    avatar: <FaUserTie />,
  },
  {
    id: 4,
    title: "AI Prompt Engineer",
    description: "Design AI prompt workflows for creative tasks.",
    payment: "$300 USDT",
    badge: "Prompt",
    avatar: <FaRobot />,
  },
  {
    id: 5,
    title: "Solidity Auditor",
    description: "Review and audit Solidity code for vulnerabilities.",
    payment: "1 ETH",
    badge: "Security",
    avatar: <FaUserSecret />,
  },
  {
    id: 6,
    title: "Community Manager",
    description: "Grow and manage Web3 communities.",
    payment: "0.2 ETH",
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
          <span className="payment">{job.payment}</span>
          <button className="apply-btn">
            <FaEthereum /> Apply with Web3
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default JobList;