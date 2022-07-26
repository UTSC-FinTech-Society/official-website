import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import Logo from "../assets/utsc-fts-logo.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar: React.FC = () => {

    const [openMenuMode, setOpenMenuMode] = useState<boolean>(false);

    const navbarRef = useRef<HTMLDivElement>(null);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 115 && navbarRef.current && !openMenuMode) {
            navbarRef.current.style.backgroundColor = '#040C43';
            navbarRef.current.style.height = '80px';
        } else if (window.scrollY <= 115 && navbarRef.current && !openMenuMode) {
            navbarRef.current.style.backgroundColor = 'transparent';
            navbarRef.current.style.height = '100px';
        } else if (openMenuMode && navbarRef.current) {
            navbarRef.current.style.backgroundColor = '#040C43';
            navbarRef.current.style.height = '100vh';
        }
    });

    useEffect(() => {
        if (navbarRef.current) {
            if (openMenuMode) {
                navbarRef.current.classList.add('open-menu');
                navbarRef.current.style.backgroundColor = '#040C43';
                navbarRef.current.style.height = '100vh';
            } else {
                navbarRef.current.classList.remove('open-menu');
                
                if (window.scrollY > 115) {
                    navbarRef.current.style.backgroundColor = '#040C43';
                    navbarRef.current.style.height = '80px';
                } else if (window.scrollY <= 115) {
                    navbarRef.current.style.backgroundColor = 'transparent';
                    navbarRef.current.style.height = '100px';
                }
            }
        }
    }, [openMenuMode]);

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (openMenuMode) {
            setOpenMenuMode(false);
            console.log('close menu');
        } else {
            setOpenMenuMode(true);
        }
    }; 

    return (
        <nav ref={navbarRef}>
            <div className="nav-bar-container">
                <img src={Logo} alt="UTSC FTS Logo" />
                <div className="nav-btn-container">
                    <Link to='/' style={{textDecoration:"none"}}><h3 className='nav-btn'>About</h3></Link>
                    <Link to='/team' style={{textDecoration:"none"}}><h3 className='nav-btn'>Team</h3></Link>
                    <Link to='/events' style={{textDecoration:"none"}}><h3 className='nav-btn'>Events</h3></Link>
                    <Link to='/news' style={{textDecoration:"none"}}><h3 className='nav-btn'>News</h3></Link>
                    <h3 className='nav-btn' onClick={() => window.scrollTo(0, document.body.scrollHeight)} >Contact</h3>
                </div>
                <div className="mobile-menu-btn" onClick={onClick}></div>
            </div>
            <div className="mobile-menu-container">
                <div className="mobile-nav-btn-container">
                    <Link to='/' style={{textDecoration:"none"}}><h3 className='mobile-nav-btn about' onClick={onClick} >About</h3></Link>
                    <Link to='/team' style={{textDecoration:"none"}}><h3 className='mobile-nav-btn team' onClick={onClick} >Team</h3></Link>
                    <Link to='/events' style={{textDecoration:"none"}}><h3 className='mobile-nav-btn events' onClick={onClick} >Events</h3></Link>
                    <Link to='/news' style={{textDecoration:"none"}}><h3 className='mobile-nav-btn news' onClick={onClick} >News</h3></Link>
                    <h3 className='mobile-nav-btn contact' onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                        window.scrollTo(0, document.body.scrollHeight);
                        onClick(e);
                        }} >Contact</h3>
                </div>
            </div>
            <div className="social-icon-container">
                <div className="icon-container">
                    <a href='https://www.instagram.com/utscfintech/' target='_blank'><FaInstagram size='35px' /></a>
                    <a href='https://www.linkedin.com/company/utscfts' target='_blank'><FaLinkedin size='35px' /></a>
                    <a href='https://github.com/UTSC-FinTech-Society' target='_blank'><FaGithub size='35px' /></a>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;