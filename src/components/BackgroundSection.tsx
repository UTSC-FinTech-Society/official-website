import React from 'react';

type Prop = {
    descriptions?: {text: string, color: string, textShadow?: string}[],
    bgImage: string,
    bgSize?: string
}

const BackgroundSection = ({ descriptions, bgImage, bgSize }: Prop) => {
    return (
        <section className='background-section-container' style={{backgroundImage: `${bgImage}`, backgroundSize: `${bgSize}`}}>
            {descriptions && descriptions!.length > 0 && descriptions!.map(description => <h1 className='description' style={!description.textShadow ? { color: `${description.color}`} : { color: `${description.color}`, textShadow: `${description.textShadow}` } } >{description.text}</h1>)}
        </section>
    )
};

export default BackgroundSection;