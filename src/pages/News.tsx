import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import BackgroundSection from '../components/BackgroundSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import BuildingBackground from "../assets/background/building-background.jpg";

const News: React.FC = () => {

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className='news-page-container'>
            <NavBar />
            <BackgroundSection descriptions={['Weekly Market Reviews', '& News Updates']} bgImage={BuildingBackground} />
            <NewsSection />
            <ContactSection />
        </div>
    )
};

export default News;