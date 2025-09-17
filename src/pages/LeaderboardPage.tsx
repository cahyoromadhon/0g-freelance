import React from "react";
import Navbar from "../components/Navbar";
import Leaderboard from "../components/Leaderboard";

const LeaderboardPage: React.FC = () => {
  const scrollToJobs = () => {
    // Navigate to jobs page - could be implemented with router navigation
    window.location.href = '/jobs';
  };

  return (
    <>
      <Navbar scrollToJobs={scrollToJobs} />
      <main>
        <Leaderboard />
      </main>
    </>
  );
};

export default LeaderboardPage;