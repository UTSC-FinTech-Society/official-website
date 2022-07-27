import React from 'react';
const Fade = require('react-reveal/Fade');

const ExecutiveCard = ({ name, position, profilePic }: { name: string, position: string, profilePic: any }) => {
    return (
        <div className="executive-card-container">
            <Fade bottom cascade>
                <img src={profilePic} alt={`${name}'s Profile Pic`} />
                <div className="introduction-container">
                    <p className='name'>{name}</p>
                    <p className='position'>{position}</p>
                </div>
            </Fade>
        </div>
    )
};

export default ExecutiveCard;