import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import BackgroundSection from '../components/BackgroundSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import BuildingBackground from "../assets/background/building-background2.jpeg";

const News: React.FC = () => {

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className='news-page-container'>
            <NavBar />
            <BackgroundSection descriptions={[{ text: 'Weekly Market Reviews', color: '#f1f1f1', textShadow: '#040C43 1px 0 20px' }, { text: '& News Updates', color: '#f1f1f1', textShadow: '#040C43 1px 0 20px' }]} bgImage={`linear-gradient(rgba(50,50,50,.5), rgba(50,50,50,.5)), url(${BuildingBackground})`} bgSize='100vw 70vh' />
            <NewsSection />
            <ContactSection />
        </div>
    )
};

export default News;