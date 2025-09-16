import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";


const scrollToJobs = () => {
  window.location.href = "/jobs";
};

const Home: React.FC = () => (
  <>
    <Navbar scrollToJobs={scrollToJobs} />
    <main>
      <HeroSection scrollToJobs={scrollToJobs} />
    </main>
  </>
);

export default Home;