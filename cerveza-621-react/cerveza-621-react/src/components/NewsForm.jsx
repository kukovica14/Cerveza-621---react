// src/components/NewsForm.jsx
import { useState } from 'react';

function NewsForm() {
    // 1. Estado para almacenar los datos del formulario (Punto 3.1)
    const [formData, setFormData] = useState({ 
        nombreCompleto: '', 
        telefono: '', 
        emailNovedades: '' 
    });

    // 2. Handler para actualizar el estado en cada cambio (Punto 3.2)
    const handleChange = (e) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value 
        });
    };

    // 3. Handler para el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // <-- ¡Crucial! Previene la recarga de la página (Punto 3.2)
        console.log('Datos de Novedades Enviados:', formData); // (Punto 3.2)
        alert(`¡Gracias ${formData.nombreCompleto}! Revisar consola para los datos.`);
        setFormData({ nombreCompleto: '', telefono: '', emailNovedades: '' }); // Resetea
    };

    return (
        <section id="novedades" className="section novedades-section">
            <h2>Novedades</h2>
            <div className="novedades-contenido">
                <p className="novedades-intro">¡Registrate para recibir las últimas novedades de nuestros productos, eventos especiales y promociones exclusivas!</p>
                
                <form className="formulario-novedades" onSubmit={handleSubmit}>
                    <div className="form-grupo">
                        <label htmlFor="nombreCompleto">Nombre Completo:</label>
                        <input 
                            type="text" 
                            id="nombreCompleto" 
                            name="nombreCompleto" 
                            value={formData.nombreCompleto}
                            onChange={handleChange}
                            required 
                            placeholder="Ingresa tu nombre y apellido"
                        />
                    </div>
                    <div className="form-grupo">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input 
                            type="tel" 
                            id="telefono" 
                            name="telefono" 
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="Ej: 1123456789"
                        />
                    </div>
                    <div className="form-grupo">
                        <label htmlFor="emailNovedades">Email:</label>
                        <input 
                            type="email" 
                            id="emailNovedades" 
                            name="emailNovedades" 
                            value={formData.emailNovedades}
                            onChange={handleChange}
                            required 
                            placeholder="tu.correo@ejemplo.com"
                        />
                    </div>
                    <button type="submit" className="btn-enviar">¡Quiero las novedades!</button>
                </form>
            </div>
        </section>
    );
}

export default NewsForm;