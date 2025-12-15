// src/components/BeerCard.jsx
import React from 'react';

const BeerCard = ({ name, imageSrc, description, id }) => {
    return (
        <div className="card-cerveza" id={id}>
            <img src={imageSrc} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default BeerCard;