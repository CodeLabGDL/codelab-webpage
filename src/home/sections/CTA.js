import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              ¿Listo para unirte a CodeLab?
            </h2>
            <p className="cta-description">
              Si eres un programador apasionado y quieres participar en hackatones 
              y competencias de programación, ¡CodeLab es el lugar perfecto para ti!
            </p>
            <div className="cta-buttons">
              <Link to="/contacto" className="gradient-button">
                Únete Ahora
              </Link>
              <Link to="/quienes-somos" className="outline-button">
                Conoce Más
              </Link>
            </div>
          </div>
          <div className="cta-visual">
            <div className="cta-icon">
              <div className="code-symbols">
                <span className="symbol">&lt;</span>
                <span className="symbol">/</span>
                <span className="symbol">&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
