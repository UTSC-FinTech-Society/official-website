import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TechnologyAnimation from "../assets/background/technology-animation.gif";
const Fade = require('react-reveal/Fade');

const AboutSection: React.FC = () => {
    const navigate = useNavigate();

    const whiteBoardRef = useRef<HTMLDivElement>(null);

    window.addEventListener('scroll', () => {
        if (whiteBoardRef.current)  {
            whiteBoardRef.current.style.marginTop = -window.scrollY/3 + 'px';
        }
    });

    return (
        <section className='about-section-container' style={{backgroundImage: `url(${TechnologyAnimation})`}} >
            <div className="white-board" ref={whiteBoardRef} >
                <Fade bottom cascade>
                    <div className="about-us-container">
                        <h3>About Us</h3>
                        <p className='description'>
                            FinTech Society (FTS) serves as a platform to connect tech-savvy and finance enthusiasts from all disciplines. Through a series of workshops, peer-mentorship, case competitions, hackathons, career exploration and guest speaker events, we hope to foster the learning of financial technology in areas such as BlockChain, Algo Trading, Cryptocurrency and Artificial Intelligence. Our goal is to equip students with knowledge of financial technology and provide valuable resources to students who want to step foot into the industry. 
                        </p>
                    </div>
                </Fade>
                <Fade bottom cascade>
                    <div className="join-us-container">
                        <h3>Join Our Membership Now</h3>
                        <button onClick={() => navigate('/membership-form')}>Join Us</button>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default AboutSection;