import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import BackgroundSection from '../components/BackgroundSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';
import buildingBackground from "../assets/background/building-background.jpg";

const Events: React.FC = () => {

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className='events-page-container'>
            <NavBar />
            <BackgroundSection descriptions={['Check Out', 'Our Exciting Events']} bgImage={buildingBackground} />
            <EventsSection />
            <ContactSection />
        </div>
    )
};

export default Events;