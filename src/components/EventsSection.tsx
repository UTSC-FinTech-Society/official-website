import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import EventCard from './EventCard';
import Loading from './Loading';
const Fade = require('react-reveal/Fade');

const EventsSection = () => {
    // const { eventsList, isLoading } = useSelector((state: RootState) => state.events);
    const whiteBoardRef = useRef<HTMLDivElement>(null);

    window.addEventListener('scroll', () => {
        if (whiteBoardRef.current)  {
            whiteBoardRef.current.style.marginTop = -window.scrollY/5 + 'px';
        }
    });

    return (
        <section className='events-section-container'>
            <div className="white-board" ref={whiteBoardRef} >
                <Fade bottom cascade>
                    <div className="event-cards-list-container">
                        {/* {!isLoading ? eventsList.length > 0 ? eventsList.length === 1 ? eventsList.map(event => <EventCard key={event.event_id} single_card={true} {...event} />) : eventsList.map(event => <EventCard key={event.event_id} {...event} />) : <h3 className='coming-soon-text'>Coming Soon...</h3> : <Loading border='7px' size='50px' color='#040C43' />} */}
                        <h3 className='coming-soon-text'>Coming Soon...</h3>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default EventsSection;