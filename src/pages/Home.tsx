import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
    return (
        <div className="home-page-container">
            <NavBar />
            <HeroSection />
            <AboutSection />
            <ContactSection />
        </div>
    )
};

export default Home;