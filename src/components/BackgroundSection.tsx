import React from 'react';
import buildingBackground from "../assets/building-background.jpg";

type Prop = {
    descriptions?: string[]
}

const BackgroundSection = ({ descriptions }: Prop) => {
    return (
        <section className='background-section-container' style={{backgroundImage: `linear-gradient(rgba(50,50,50,.5), rgba(50,50,50,.5)), url(${buildingBackground})`}}>
            {descriptions && descriptions!.length > 0 && descriptions!.map(description => <h1 className='description'>{description}</h1>)}
        </section>
    )
};

export default BackgroundSection;