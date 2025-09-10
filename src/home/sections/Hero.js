import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="floating-elements">
        <div className="floating-element">
          <div className="code-icon">&lt;/&gt;</div>
        </div>
        <div className="floating-element">
          <div className="code-icon">{ }</div>
        </div>
        <div className="floating-element">
          <div className="code-icon">#</div>
        </div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          CodeLab
        </h1>
        <h2 className="hero-subtitle">
          Hackathons & Competitive Programming
        </h2>
        <p className="hero-description">
          Somos un grupo de programadores apasionados que participamos en hackatones 
          y competencias de programación. Desarrollamos soluciones innovadoras y 
          competimos en los torneos más prestigiosos del mundo.
        </p>
        <div className="hero-buttons">
          <Link to="/quienes-somos" className="gradient-button">
            Conoce Más
          </Link>
          <Link to="/contacto" className="outline-button">
            Únete al Equipo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
