import React from 'react';
import { FaStar, FaTrophy, FaCoins, FaArrowUp } from 'react-icons/fa';

interface UserPointsCardProps {
  username?: string;
  currentPoints: number;
  currentRank: number;
  nextRankPoints: number;
  completedJobs: number;
  className?: string;
}

const UserPointsCard: React.FC<UserPointsCardProps> = ({ 
  username = "Guest User",
  currentPoints = 0,
  currentRank = 999,
  nextRankPoints = 500,
  completedJobs = 0,
  className = ""
}) => {
  const pointsToNext = nextRankPoints - currentPoints;
  const progressPercentage = (currentPoints / nextRankPoints) * 100;

  return (
    <div className={`user-points-card ${className}`}>
      <div className="points-header">
        <div className="user-info-mini">
          <div className="user-avatar-mini">
            {username.charAt(0).toUpperCase()}
          </div>
          <div>
            <h4>{username}</h4>
            <span className="user-rank-text">Rank #{currentRank}</span>
          </div>
        </div>
        <div className="points-display">
          <FaCoins className="points-icon" />
          <span className="points-value">{currentPoints.toLocaleString()}</span>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-info">
          <span>Progress to next rank</span>
          <span className="points-needed">{pointsToNext} pts needed</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          ></div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <FaStar className="stat-icon" />
          <div>
            <span className="stat-value">{completedJobs}</span>
            <span className="stat-label">Jobs Done</span>
          </div>
        </div>
        <div className="stat-item">
          <FaTrophy className="stat-icon" />
          <div>
            <span className="stat-value">4.8</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
        <div className="stat-item">
          <FaArrowUp className="stat-icon" />
          <div>
            <span className="stat-value">+{Math.floor(currentPoints * 0.1)}</span>
            <span className="stat-label">This Week</span>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <button className="action-btn primary">
          <FaTrophy /> View Leaderboard
        </button>
        <button className="action-btn secondary">
          Earn More Points
        </button>
      </div>
    </div>
  );
};

export default UserPointsCard;