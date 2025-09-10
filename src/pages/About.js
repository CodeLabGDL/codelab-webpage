import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Quiénes Somos</h1>
          <p className="page-subtitle">
            Conoce más sobre CodeLab y nuestra misión en el mundo de la programación
          </p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Nuestra Historia</h2>
            <p>
              CodeLab nació de la pasión de un grupo de programadores que se conocieron 
              en diferentes hackatones y competencias. Decidimos unir fuerzas para crear 
              un espacio donde pudieran desarrollar sus habilidades y participar en 
              eventos de programación de manera colaborativa.
            </p>
          </section>

          <section className="about-section">
            <h2>Nuestra Misión</h2>
            <p>
              Nuestra misión es fomentar la excelencia en la programación a través de 
              la participación activa en hackatones, competencias de programación y 
              el desarrollo de proyectos innovadores que solucionen problemas reales.
            </p>
          </section>

          <section className="about-section">
            <h2>Nuestros Valores</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovación</h3>
                <p>Buscamos constantemente nuevas formas de resolver problemas complejos</p>
              </div>
              <div className="value-card">
                <h3>Colaboración</h3>
                <p>Trabajamos en equipo para lograr objetivos comunes</p>
              </div>
              <div className="value-card">
                <h3>Excelencia</h3>
                <p>Nos esforzamos por entregar soluciones de la más alta calidad</p>
              </div>
              <div className="value-card">
                <h3>Aprendizaje</h3>
                <p>Mantenemos una mentalidad de crecimiento continuo</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
