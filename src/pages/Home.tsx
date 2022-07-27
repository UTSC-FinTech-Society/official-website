import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {

    useEffect(() => window.scrollTo(0, 0), []);

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