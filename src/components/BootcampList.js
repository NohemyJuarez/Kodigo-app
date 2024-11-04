i// components/BootcampList.js

import React from 'react';
import BootcampItem from './BootcampItem';

const BootcampList = ({ bootcamps }) => {
    return (
        <div className="row">
            {bootcamps.map((bootcamp) => (
                <div className="col-md-4" key={bootcamp.id}>
                    <BootcampItem bootcamp={bootcamp} />
                </div>
            ))}
        </div>
    );
};

export default BootcampList;
