import React from 'react';
import HeroSectionBackground from "../assets/hero-section-background.jpg";

const HeroSection: React.FC = () => {
    return (
        <section className='hero-section-container' style={{backgroundImage: `linear-gradient(rgba(50,50,50,.5), rgba(50,50,50,.6)), url(${HeroSectionBackground})`}}>
            <div className="hero-text-container">
                <h2 className='welcome-text'>Welcome to</h2>
                <h1 className='fts-name'>UTSC FinTech Society</h1>
                <h2 className='fts-founding-year'>EST. <span>2022</span></h2>
            </div>
        </section>
    );
};

export default HeroSection;