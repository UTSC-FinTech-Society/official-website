import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import BackgroundSection from '../components/BackgroundSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';
import BuildingBackground from "../assets/background/building-background.jpg";

const Events: React.FC = () => {

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className='events-page-container'>
            <NavBar />
            <BackgroundSection descriptions={[{ text: 'Check Out', color: '#f1f1f1' }, { text: 'Our Upcoming Events', color: '#040C43' }]} bgImage={`linear-gradient(rgba(50,50,50,.5), rgba(50,50,50,.5)), url(${BuildingBackground})`} bgSize='100vw 60vh' />
            <EventsSection />
            <ContactSection />
        </div>
    )
};

export default Events;