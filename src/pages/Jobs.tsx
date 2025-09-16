import React from 'react';
import Navbar from '../components/Navbar';
import JobList from '../components/JobList';
import Footer from '../components/Footer';

const Jobs: React.FC = () => (
  <>
    <Navbar />
    <main>
      <JobList />
    </main>
    <Footer />
  </>
);

export default Jobs;