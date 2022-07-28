import React, { useRef } from 'react';
import TradingAnimation from "../assets/background/trading-animation.gif";
const Fade = require('react-reveal/Fade');

const NewsSection = () => {
    const whiteBoardRef = useRef<HTMLDivElement>(null);

    window.addEventListener('scroll', () => {
        if (whiteBoardRef.current)  {
            whiteBoardRef.current.style.marginTop = -window.scrollY/5 + 'px';
        }
    });

    return (
        <section className='news-section-container' style={{backgroundImage: `url(${TradingAnimation})`}}  >
            <div className="white-board" ref={whiteBoardRef} >
                <Fade bottom>
                    <h3 className='coming-soon-text'>Coming Soon...</h3>
                </Fade>
            </div>
        </section>
    );
};

export default NewsSection;