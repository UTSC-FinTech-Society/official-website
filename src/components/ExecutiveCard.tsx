import React from 'react'

const ExecutiveCard = ({ name, position, profilePic }: { name: string, position: string, profilePic: any }) => {
    return (
        <div className="executive-card-container">
            <img src={profilePic} alt={`${name}'s Profile Pic`} />
            <div className="introduction-container">
                <p className='name'>{name}</p>
                <p className='position'>{position}</p>
            </div>
        </div>
    )
};

export default ExecutiveCard;