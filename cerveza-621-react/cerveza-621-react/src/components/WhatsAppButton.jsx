// src/components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
    return (
        <a 
            href="https://wa.me/+5491164499718?text=Hola,%20quisiera%20consultar%20sobre%20sus%20cervezas." 
            target="_blank" 
            className="whatsapp-fixed-button"
            rel="noopener noreferrer" 
        >
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
}

export default WhatsAppButton;