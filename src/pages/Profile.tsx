import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';

const Profile: React.FC = () => (
  <>
    <Navbar />
    <main>
      <ProfileCard />
    </main>
    <Footer />
  </>
);

export default Profile;