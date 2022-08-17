import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Loading from './Loading';
import TradingAnimation from "../assets/background/trading-animation.gif";
import NewsCard from './NewsCard';
const Fade = require('react-reveal/Fade');

const NewsSection = () => {
    const { newsList, isLoading } = useSelector((state: RootState) => state.news);
    const whiteBoardRef = useRef<HTMLDivElement>(null);

    window.addEventListener('scroll', () => {
        if (whiteBoardRef.current)  {
            whiteBoardRef.current.style.marginTop = -window.scrollY/5 + 'px';
        }
    });

    return (
        <section className='news-section-container' style={{backgroundImage: `url(${TradingAnimation})`}}  >
            <div className="white-board" ref={whiteBoardRef} >
                <Fade bottom cascade>
                    <div className="news-cards-list-container">
                        {!isLoading ? newsList.length > 0 ? newsList.length === 1 ? newsList.map(news => <NewsCard key={news.news_id} single_card={true} {...news} />) : newsList.map(news => <NewsCard key={news.news_id} {...news} />) : <h3 className='coming-soon-text'>Coming Soon...</h3> : <Loading border='7px' size='50px' color='#040C43' />}   
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default NewsSection;