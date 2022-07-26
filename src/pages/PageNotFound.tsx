import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
    return (
        <div className="page-not-found-container">
            <div className="text-container">
                <FaExclamationTriangle size='100px' color='#ed4337' />
                <h1>404</h1>
                <p>Sorry, this page does not exist...</p>
                <Link to='/' style={{textDecoration: 'none'}}><button className='go-back-btn'>Go Back</button></Link>
            </div>
        </div>
    )
};

export default PageNotFound;