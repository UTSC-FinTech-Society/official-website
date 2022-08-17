import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import axios, { AxiosResponse, AxiosError } from "axios";
import convertArrayBufferToBase64String from '../utils/displayImage';
import DOMPurify from 'dompurify';
import Loading from './Loading';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from 'tsparticles-engine';

const EventDetailsSection = () => {
    const event_id = Number(useParams().event_id);
    const eventsList = useSelector((state: RootState) => state.events.eventsList);

    const navigate = useNavigate();

    const [display, setDisplay] = useState(false);

    const [eventDetails, setEventDetails] = useState<{ name: string, description: string, register_deadline?: Date, start_datetime?: Date, end_datetime?: Date, entry_fee?: number, location: string, poster_type: string, poster_data: string, signup_link?: string }>({ name: '', description: '', register_deadline: undefined, start_datetime: undefined, end_datetime: undefined, entry_fee: undefined, location: '', poster_type: '', poster_data: '', signup_link: undefined });
    const { name, description, register_deadline, start_datetime, end_datetime, entry_fee, location, poster_type, poster_data, signup_link } = eventDetails;

    const particlesInit = async (engine: Engine) => {
        await loadFull(engine);
    };

    useEffect(() => {

        if (eventsList.length > 0) {
            const eventExist = eventsList.find(event => event.event_id === event_id);

            if (eventExist) {
                setEventDetails({ name: eventExist.name, description: eventExist.description, register_deadline: eventExist.register_deadline, start_datetime: eventExist.start_datetime, end_datetime: eventExist.end_datetime, entry_fee: eventExist.entry_fee, location: eventExist.location, poster_type: eventExist!.poster_type, poster_data: eventExist.poster_data, signup_link: eventExist.signup_link });
                setDisplay(true);
            } else {
                navigate('/page-not-found');
            }

        } else {
            axios.get(`${process.env.REACT_APP_SERVER_URL}/api/events/${event_id}`).then((response: AxiosResponse) => {
                setEventDetails({ name: response.data.event.name, description: response.data.event.description, register_deadline: response.data.event.register_deadline, start_datetime: response.data.event.start_datetime, end_datetime: response.data.event.end_datetime, entry_fee: response.data.event.entry_fee, location: response.data.event.location, poster_type: response.data.event.poster_type, poster_data: convertArrayBufferToBase64String(response.data.event.poster_data.data)!, signup_link: response.data.event.signup_link });
                setDisplay(true);
            }).catch((error: AxiosError | any) => navigate('/page-not-found'));
        }

    }, [eventsList]);

    const formatTime = (hour: number, min: number) => {
        const formattedMin = min < 10 ? `0${min}` : min;

        if (hour > 12) {
            return `${hour - 12}:${formattedMin}pm`;
        } else if (hour === 12) {
            return `${hour}:${formattedMin}pm`;
        } else {
            return `${hour}:${formattedMin}am`;
        }
    }

    const formatDate = (datetime: Date) => {
        const register_deadline = new Date(datetime);
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][register_deadline.getUTCMonth()];
        const day = register_deadline.getUTCDate();
        const hour = register_deadline.getUTCHours();
        const min = register_deadline.getUTCMinutes();

        return `${month} ${day} @ ${formatTime(hour, min)}`;
    };

    const formatEventTimePeriod = (start_time: Date, end_time: Date) => {
        const start_datetime = new Date(start_time);
        const end_datetime = new Date(end_time);

        const start_month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][start_datetime.getUTCMonth()];
        const end_month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][end_datetime.getUTCMonth()];
        const start_day = start_datetime.getUTCDate();
        const end_day = end_datetime.getUTCDate();
        const start_hour = start_datetime.getUTCHours(); 
        const end_hour = end_datetime.getUTCHours();
        const start_min = start_datetime.getUTCMinutes();
        const end_min = end_datetime.getUTCMinutes();

        if (((end_datetime.getTime() - start_datetime.getTime()) / (1000 * 60 * 60)) <= 24) {
            return `${start_month} ${start_day} @ ${formatTime(start_hour, start_min)} - ${formatTime(end_hour, end_min)}`;
        } else {
            if (start_hour === 0 && end_hour === 0 && start_min === 0 && end_hour === 0) {
                return `${start_month} ${start_day} - ${end_month} ${end_day}`;
            } else {
                return `${start_month} ${start_day} ${formatTime(start_hour, start_min)} - ${end_month} ${end_day} ${formatTime(end_hour, end_min)}`;
            }
        }
    };

    return (
        <section className="event-details-section-container">
            {display ? (
                <>
                    <Particles className='particles' init={particlesInit} options={{ fullScreen: { enable: false, zIndex: 0 }, particles: { number: { value: 60, density: { enable: true, value_area: 1000 }}, color: { value: "#ffffff" }, shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 }}, opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }}, size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false }}, line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.26456299004281125, width: 1}, move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 }}}, interactivity: { detect_on: "canvas", events: { onhover: { enable: false, mode: "repulse" }, onclick: { enable: false, mode: "push" }, resize: true}, modes: { grab: { distance: 400, line_linked: { opacity: 1 }}, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4}, push: { particles_nb: 4 }, remove: { particles_nb: 2 }}}, retina_detect: true } } />
                    <div className="event-details-container">
                        <div className="poster-container">
                            <img src={`data:${poster_type};base64, ${poster_data}`} alt={`${name} Poster`} />
                        </div>
                        <div className="details-container">
                            <h3 className='name'>{name}</h3>
                            <div className='description'  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description.replaceAll(/font-size:((.|\s)*?);/gim, '').replaceAll('color: rgb(99,99,99);', '').replaceAll('color: rgb(0,0,0);', '').replace(/font-family:((.|\s)*?);/gim, '')) }}></div>
                            <div className="metadata-container">
                                <p className='entry-fee'>Entry Fee: {entry_fee && entry_fee !== 0 ? `$${entry_fee}` :  'Free'}</p>
                                <p className='register-deadline'>{`Sign Up Deadline: ${formatDate(register_deadline!)}`}</p>
                                <p className='start-and-end-datetime'>{`Date: ${formatEventTimePeriod(start_datetime!, end_datetime!)}`}</p>
                                <p className='location'>{`Location: ${location}`}</p>
                                <p className='signup_link'>Sign Up Link: {signup_link && signup_link !== '' ? <a href={signup_link} target='_blank'>{signup_link}</a> : 'None'} </p>
                            </div>
                        </div>
                    </div>
                </>
            ): <Loading border='7px' color='white' size='50px' />}
        </section>
    )
};

export default EventDetailsSection;