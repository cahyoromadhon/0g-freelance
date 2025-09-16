import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import JobList from "../components/JobList";

const Home: React.FC = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <JobList />
    </main>
  </>
);

export default Home;