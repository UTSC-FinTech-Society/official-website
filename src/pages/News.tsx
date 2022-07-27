import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import BackgroundSection from '../components/BackgroundSection';
import ContactSection from '../components/ContactSection';

const News: React.FC = () => {

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className='news-page-container'>
            <NavBar />
            <BackgroundSection />
            <ContactSection />
        </div>
    )
};

export default News;