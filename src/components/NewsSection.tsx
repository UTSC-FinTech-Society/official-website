import React, { useRef } from 'react';

const NewsSection = () => {
    const whiteBoardRef = useRef<HTMLDivElement>(null);

    window.addEventListener('scroll', () => {
        if (whiteBoardRef.current)  {
            whiteBoardRef.current.style.marginTop = -window.scrollY/5 + 'px';
        }
    });

    return (
        <section className='news-section-container'>
            <div className="white-board" ref={whiteBoardRef} >
                <h3 className='coming-soon-text'>Coming Soon...</h3>
            </div>
        </section>
    );
};

export default NewsSection;