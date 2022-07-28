import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import BackgroundSection from '../components/BackgroundSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import BuildingBackground from "../assets/background/building-background.jpg";

const Team: React.FC = () => {

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className='team-page-container'>
            <NavBar />
            <BackgroundSection descriptions={[{text: 'Meet the', color: '#f1f1f1'}, {text: '2022-2023 FTS Team', color: '#040C43'}]} bgImage={`linear-gradient(rgba(50,50,50,.5), rgba(50,50,50,.5)), url(${BuildingBackground})`} bgSize='100vw 60vh'  />
            <TeamSection />
            <ContactSection />
        </div>
    );
};

export default Team;