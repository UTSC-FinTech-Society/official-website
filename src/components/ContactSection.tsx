import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Logo from "../assets/utsc-fts-logo.png";

const ContactSection = () => {
  return (
    <section id='contact'>
        <div className="container">
            <div className="contact-container">
                <div className="fts-address-email-container">
                    <div className="address">
                        <p className='fts-name'>UTSC FinTech Society</p>
                        <p>1265 Military Trail</p>
                        <p>Scarborough, ON</p>
                        <p>M1C 1A4</p>
                    </div>
                    <div className="email">
                        <a href='mailto:utsc.fts@gmail.com'><button>utsc.fts@gmail.com</button></a>
                    </div>
                </div>
                <div className="fts-social-container">
                    <img src={Logo} alt="UTSC FTS Logo" />
                    <p className='description'>Follow us on our social media to stay updated on our upcoming news and events!!</p>
                    <div className="icon-container">
                        <a href='mailto:utsc.fts@gmail.com' target='_blank' className='mail' ><MdOutlineEmail size='35px' /></a>
                        <a href='https://www.instagram.com/utscfintech/' target='_blank'><FaInstagram size='35px' /></a>
                        <a href='https://www.linkedin.com/company/utscfts' target='_blank'><FaLinkedin size='35px' /></a>
                        <a href='https://github.com/UTSC-FinTech-Society' target='_blank'><FaGithub size='35px' /></a>
                    </div>
                </div>
            </div>
            <div className="fts-google-map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.5098118269457!2d-79.18956928459909!3d43.78303327911706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4da6fb7abd57f%3A0xbb656e0169887bac!2sUniversity%20of%20Toronto%20Scarborough!5e0!3m2!1sen!2sca!4v1658812371279!5m2!1sen!2sca" width="400" height="200" style={{border: '0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <p className='creator-description'>UTSC FTS, 2022 © <a href='https://github.com/edison-lhk' target='_blank'>Edison Liem</a> & <span>Katelyn Tam</span></p>
    </section>
  )
};

export default ContactSection;