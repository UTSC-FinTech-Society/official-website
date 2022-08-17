import React from 'react';
import convertArrayBufferToBase64String from '../utils/displayImage';
import { useNavigate } from 'react-router-dom';
import { IconContext } from "react-icons";
import { CgArrowLongRight } from "react-icons/cg";
const Fade = require('react-reveal/Fade');

type Prop = {
    news_id: number, 
    title: string, 
    content: string, 
    picture_type: string, 
    picture_data: string,
    author: string, 
    created_at: Date,
    single_card?: boolean
};

const NewsCard = ({ news_id, title, content, picture_type, picture_data, author, created_at, single_card }: Prop) => {

    const navigate = useNavigate();

    const formatDate = (date: Date) => {
        const created_at = new Date(date);
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][created_at.getUTCMonth()];
        const day = created_at.getUTCDate();
        const year = created_at.getFullYear();
        return `${month} ${day}, ${year}`;
    };

    return (
        <>
            {single_card ? (
                <Fade bottom>
                    <div className="news-card-container single-card" onClick={() => navigate(`/news/${news_id}`)} >
                        <div className="picture-container">
                            <img src={`data:${picture_type};base64, ${picture_data}`} alt={`News ${news_id} Picture`} />
                        </div>
                        <div className="description-container">
                            <p className='metadata'>{`${formatDate(created_at)} · ${author}`}</p>
                            <h3 className='title'>{title}</h3>
                            <button className="read-btn">
                                <p>read</p>
                                <CgArrowLongRight color='#009f9d' size='15px' />
                            </button>
                        </div>
                    </div>
                </Fade>
            ) : (
                <Fade bottom>
                    <div className="news-card-container" onClick={() => navigate(`/news/${news_id}`)} >
                        <div className="picture-container">
                            <img src={`data:${picture_type};base64, ${picture_data}`} alt={`News ${news_id} Picture`} />
                        </div>
                        <div className="description-container">
                            <p className='metadata'>{`${formatDate(created_at)} · ${author}`}</p>
                            <h3 className='title'>{title}</h3>
                            <button className="read-btn">
                                <p>read</p>
                                <div className="read-icon-container"><IconContext.Provider value={{ className: 'read-icon' }}><CgArrowLongRight /></IconContext.Provider></div>
                            </button>
                        </div>
                    </div>
                </Fade>
            )}
        </>
    )
};

export default NewsCard;