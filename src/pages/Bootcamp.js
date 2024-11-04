// pages/Bootcamps.js

import React from 'react';
import BootcampList from '../components/BootcampList';

const Bootcamps = ({ bootcamps }) => {
    return (
        <div className="container">
            <h2>Nuestros Bootcamps</h2>
            <BootcampList bootcamps={bootcamps} />
        </div>
    );
};

export default Bootcamps;
