// components/BootcampItem.js

import React from 'react';

const BootcampItem = ({ bootcamp }) => {
    return (
        <div className="card">
            <img src={bootcamp.image} className="card-img-top" alt={bootcamp.name} />
            <div className="card-body">
                <h5 className="card-title">{bootcamp.name}</h5>
                <p className="card-text">{bootcamp.description}</p>
                <a href="#" className="btn btn-primary">Inscribirse</a>
            </div>
        </div>
    );
};

export default BootcampItem;
