import React from 'react';
const Fade = require('react-reveal/Fade');

const TeamGroup = ({ name, children }: { name: string, children: React.ReactNode }) => {

    return (
        <div className="team-group-container">
            <Fade bottom>
                <h3 className='team-name'>{name}</h3>
            </Fade>
            <div className="executive-card-container">
                {children}
            </div>
        </div>
    )
};

export default TeamGroup;