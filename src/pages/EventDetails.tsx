import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import EventDetailsSection from '../components/EventDetailsSection';
import ContactSection from '../components/ContactSection';

const EventDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="event-details-page-container">
            <NavBar />
            <EventDetailsSection />
            <ContactSection />
        </div>
    )
};

export default EventDetails;