import React from 'react';
import './faqs.css';

function Faqs() {
    return (
        <section className='faqs-section'>
            <h2>Preguntas Frecuentes</h2>
            <div className="faqs-container">
                <div className="faqs">
                    <h4>Pregunta 1</h4>
                    <p>Respuesta 1</p>
                </div>
                <div className="faqs">
                    <h4>Pregunta 2</h4>
                    <p>Respuesta 2</p>
                </div>
                <div className="faqs">
                    <h4>Pregunta 3</h4>
                    <p>Respuesta 3</p>
                </div>
            </div>
        </section>
    )
};
export default Faqs;