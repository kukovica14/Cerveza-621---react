// src/components/Gallery.jsx
import React from 'react';
import { GALLERY_IMAGES } from '../data/beerData';

const Gallery = () => {
    return (
        <section id="galeria" className="section galeria-section">
            <h2>Galería</h2>
            <div className="grid-galeria"> 
                {GALLERY_IMAGES.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
        </section>
    );
}

export default Gallery;