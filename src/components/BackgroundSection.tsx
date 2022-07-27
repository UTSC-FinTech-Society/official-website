import React from 'react';

type Prop = {
    descriptions?: string[],
    bgImage: any
}

const BackgroundSection = ({ descriptions, bgImage }: Prop) => {
    return (
        <section className='background-section-container' style={{backgroundImage: `linear-gradient(rgba(50,50,50,.5), rgba(50,50,50,.5)), url(${bgImage})`}}>
            {descriptions && descriptions!.length > 0 && descriptions!.map(description => <h1 className='description'>{description}</h1>)}
        </section>
    )
};

export default BackgroundSection;