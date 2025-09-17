import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaEthereum, FaCoins } from 'react-icons/fa';

interface LeaderboardUser {
  id: number;
  username: string;
  points: number;
  completedJobs: number;
  totalEarnings: string;
  avatar?: string;
  rank: number;
}

// Mock data untuk leaderboard
const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: 1,
    username: "CryptoDevMaster",
    points: 15420,
    completedJobs: 28,
    totalEarnings: "12.5 ETH",
    rank: 1
  },
  {
    id: 2,
    username: "BlockchainNinja",
    points: 14180,
    completedJobs: 25,
    totalEarnings: "10.8 ETH",
    rank: 2
  },
  {
    id: 3,
    username: "AIWhisperer",
    points: 13750,
    completedJobs: 22,
    totalEarnings: "9.2 ETH",
    rank: 3
  },
  {
    id: 4,
    username: "SmartContractPro",
    points: 12980,
    completedJobs: 20,
    totalEarnings: "8.7 ETH",
    rank: 4
  },
  {
    id: 5,
    username: "DeFiExpert",
    points: 12340,
    completedJobs: 19,
    totalEarnings: "7.9 ETH",
    rank: 5
  },
  {
    id: 6,
    username: "Web3Designer",
    points: 11890,
    completedJobs: 18,
    totalEarnings: "7.1 ETH",
    rank: 6
  },
  {
    id: 7,
    username: "TokenomicsGuru",
    points: 11450,
    completedJobs: 17,
    totalEarnings: "6.8 ETH",
    rank: 7
  },
  {
    id: 8,
    username: "MetaverseDev",
    points: 10980,
    completedJobs: 16,
    totalEarnings: "6.2 ETH",
    rank: 8
  },
  {
    id: 9,
    username: "NFTCreator",
    points: 10560,
    completedJobs: 15,
    totalEarnings: "5.9 ETH",
    rank: 9
  },
  {
    id: 10,
    username: "DAOBuilder",
    points: 10120,
    completedJobs: 14,
    totalEarnings: "5.5 ETH",
    rank: 10
  }
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <FaTrophy className="rank-icon gold" />;
    case 2:
      return <FaMedal className="rank-icon silver" />;
    case 3:
      return <FaAward className="rank-icon bronze" />;
    default:
      return <span className="rank-number">#{rank}</span>;
  }
};

const Leaderboard: React.FC = () => {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h1>🏆 Top Performers Leaderboard</h1>
        <p>Ranking based on points earned from completed jobs and community contributions</p>
      </div>
      
      <div className="leaderboard-stats">
        <div className="stat-card">
          <FaCoins className="stat-icon" />
          <div>
            <h3>Total Points Distributed</h3>
            <p>1,250,000 pts</p>
          </div>
        </div>
        <div className="stat-card">
          <FaEthereum className="stat-icon" />
          <div>
            <h3>Total Rewards Paid</h3>
            <p>156.7 ETH</p>
          </div>
        </div>
        <div className="stat-card">
          <FaAward className="stat-icon" />
          <div>
            <h3>Active Contributors</h3>
            <p>2,847</p>
          </div>
        </div>
      </div>

      <div className="leaderboard-table">
        <div className="table-header">
          <div className="header-rank">Rank</div>
          <div className="header-user">User</div>
          <div className="header-points">Points</div>
          <div className="header-jobs">Completed</div>
          <div className="header-earnings">Total Earnings</div>
        </div>
        
        {mockLeaderboardData.map((user) => (
          <div key={user.id} className={`leaderboard-row ${user.rank <= 3 ? 'top-three' : ''}`}>
            <div className="user-rank">
              {getRankIcon(user.rank)}
            </div>
            <div className="user-info">
              <div className="user-avatar">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div className="user-details">
                <span className="username">{user.username}</span>
                <span className="user-status">Verified Freelancer</span>
              </div>
            </div>
            <div className="user-points">
              <span className="points-value">{user.points.toLocaleString()}</span>
              <span className="points-label">pts</span>
            </div>
            <div className="user-jobs">
              <span className="jobs-count">{user.completedJobs}</span>
              <span className="jobs-label">jobs</span>
            </div>
            <div className="user-earnings">
              <FaEthereum className="eth-icon" />
              <span>{user.totalEarnings}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="leaderboard-info">
        <h3>How Points Are Earned</h3>
        <ul>
          <li><strong>Job Completion:</strong> 100-500 pts based on complexity</li>
          <li><strong>Client Rating:</strong> Bonus 10-50 pts for 4+ stars</li>
          <li><strong>On-time Delivery:</strong> 25 pts bonus</li>
          <li><strong>Community Help:</strong> 10-20 pts for forum contributions</li>
          <li><strong>Referral Bonus:</strong> 100 pts per successful referral</li>
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;