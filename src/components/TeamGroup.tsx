import React from 'react';

const TeamGroup = ({ name, children }: { name: string, children: React.ReactNode }) => {

    return (
        <div className="team-group-container">
            <h3 className='team-name'>{name}</h3>
            <div className="executive-card-container">
                {children}
            </div>
        </div>
    )
};

export default TeamGroup;