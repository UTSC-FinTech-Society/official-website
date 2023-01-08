import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Loading from './Loading';
import DOMPurify from 'dompurify';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from 'tsparticles-engine';
import axios, { AxiosResponse, AxiosError } from "axios";
import convertArrayBufferToBase64String from '../utils/displayImage';
const Fade = require('react-reveal/Fade');

const NewsDetailsSection = () => {
    const news_id = Number(useParams().news_id);
    const newsList = useSelector((state: RootState) => state.news.newsList);

    const navigate = useNavigate();

    const [display, setDisplay] = useState(false);

    const [newsDetails, setNewsDetails] = useState<{ title: string, content: string, picture_type: string, picture_data: string, author: string, created_at?: Date }>({ title: '', content: '', picture_type: '', picture_data: '', author: '', created_at: undefined });
    const { title, content, picture_type, picture_data, author, created_at  } = newsDetails;

    const particlesInit = async (engine: Engine) => {
        await loadFull(engine);
    };

    useEffect(() => {

        if (newsList.length > 0) {
            const newsExist = newsList.find(news => news.news_id === news_id);

            if (newsExist) {
                setNewsDetails({ title: newsExist.title, content: newsExist.content, picture_type: newsExist.picture_type, picture_data: newsExist.picture_data, author: newsExist.author, created_at: newsExist.created_at });
                setDisplay(true);
            } else {
                navigate('/page-not-found');
            }

        } else {
                axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news/${news_id}`).then((response: AxiosResponse) => {
                            setNewsDetails({ title: response.data.news.title, content: response.data.news.content, picture_type: response.data.news.picture_type, picture_data: convertArrayBufferToBase64String(response.data.news.picture_data.data)!, author: response.data.news.author, created_at: response.data.news.created_at });
                            setDisplay(true);
                        }).catch((error: AxiosError | any) => navigate('/page-not-found'));
            }

    }, [newsList]);

    const formatDate = (date: Date) => {
        const created_at = new Date(date);
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][created_at.getUTCMonth()];
        const day = created_at.getUTCDate();
        const year = created_at.getFullYear();
        return `${month} ${day}, ${year}`;
    };

    return (
        <section className="news-details-section-container">
            {display ? (
                <>
                    <Particles className='particles' init={particlesInit} options={{ fullScreen: { enable: false, zIndex: 0 }, particles: { number: { value: 60, density: { enable: true, value_area: 1000 }}, color: { value: "#ffffff" }, shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 }}, opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }}, size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false }}, line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.26456299004281125, width: 1}, move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 }}}, interactivity: { detect_on: "canvas", events: { onhover: { enable: false, mode: "repulse" }, onclick: { enable: false, mode: "push" }, resize: true}, modes: { grab: { distance: 400, line_linked: { opacity: 1 }}, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4}, push: { particles_nb: 4 }, remove: { particles_nb: 2 }}}, retina_detect: true } } />
                    <Fade bottom>
                        <div className="news-details-container">
                            <h1 className='title'>{title}</h1>
                            <div className="picture-container">
                                <img src={`data:${picture_type};base64, ${picture_data}`} alt={`News ${news_id} Picture`} />
                            </div>
                            <p className='metadata'>{`${author} | ${formatDate(created_at!)}`}</p>
                            <div className='content' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content).replaceAll(/style="((.|\s)*?);"/gim, '') }}  ></div>
                        </div>
                    </Fade>
                </>
            ): <Loading border='7px' color='white' size='50px' />}
        </section>
    )
};

export default NewsDetailsSection;