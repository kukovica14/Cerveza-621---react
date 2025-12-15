// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
    return (
        <section id="contacto" className="section contacto-section">
            <h2>Contacto</h2>
            <div className="contacto-info">
                <p><strong>Dirección:</strong> 1A Cumbebin Park, Byron Bay</p>
                <p><strong>Teléfono:</strong> 11-1111-1111</p>
                <p><strong>Email:</strong> cerveza-621@gmail.com</p>
                <div className="redes-sociales">
                    <a href="https://www.instagram.com/cerveza621?utm_source=ig_web_button_share_sheet&igsh=ZHlzNjQ3ZmlkbG51" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>INSTAGRAM
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;