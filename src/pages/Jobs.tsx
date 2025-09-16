import React from "react";
import Navbar from "../components/Navbar";
import JobList from "../components/JobList";

const Jobs: React.FC = () => {
  const scrollToJobs = () => {
    // Sudah di halaman jobs, scroll ke atas atau ke job list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToJobs={scrollToJobs} />
      <main>
        <JobList />
      </main>
    </>
  );
};

export default Jobs;