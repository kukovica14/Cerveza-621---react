// src/components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
    return (
        <section id="nosotros" className="section nosotros-section">
            <div className="nosotros-imagen">
                <img src="/assets/img/Galpon1.jpeg" alt="Nuestra Historia" className="imagen-nosotros" />
            </div>
            <div className="nosotros-texto">
                <h2>Nuestra Historia</h2>
                <p>621 comenzó en Maschwitz, provincia de Buenos Aires, Argentina. Octubre 2022 fue la primer coccion, 20 litros de IPA. Todo comenzó siendo un juego familiar, haciendo cervezas clasicas como IPA, Golden y Blonde, pero con el pasar de los años y con el acompañamiento de la gente tomó más fuerza y se volvió un proyecto sólido, con fabrica propia, 6 estilos y 2.000 litros de producción mensual. 
                Actualmente abastecemos en bares, despensas y eventos. 
                621 se inspira en aportar experiencias únicas y momentos para toda la vida, apostamos a la mejor materia prima, innovación y tecnología sin olvidar lo bueno de lo artesanal</p>
            </div>
        </section>
    );
}

export default AboutUs;