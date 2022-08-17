import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import NewsDetailsSection from '../components/NewsDetailsSection';
import ContactSection from '../components/ContactSection';

const NewsDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="news-details-page-container">
            <NavBar />
            <NewsDetailsSection />
            <ContactSection />
        </div>
    )
};

export default NewsDetails;