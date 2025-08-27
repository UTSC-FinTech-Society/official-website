import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getAllEvents } from '../features/events/eventsSlice';
import { getAllNews } from '../features/news/newsSlice';

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    // const state = useSelector((state: RootState) => state);

    useEffect(() => {
        window.scrollTo(0, 0);
        // if (state.events.eventsList.length === 0) dispatch(getAllEvents());
        // if (state.news.newsList.length === 0) dispatch(getAllNews());
    }, []);

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