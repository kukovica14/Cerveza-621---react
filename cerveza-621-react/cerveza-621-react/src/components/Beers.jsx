// src/components/Beers.jsx
import React from 'react';
import BeerCard from './BeerCard';
import { BEER_DATA } from '../data/beerData';

const Beers = () => {
    return (
        <section id="cervezas" className="section cervezas-section">
            <h2>Nuestras Cervezas</h2>
            <div className="grid-cervezas">
                {/* Usando map para generar las tarjetas desde los datos */}
                {BEER_DATA.map((beer) => (
                    <BeerCard 
                        key={beer.id} 
                        id={beer.id}
                        imageSrc={beer.imageSrc}
                        name={beer.name}
                        description={beer.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Beers;