import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">
              ¿Quiénes Somos?
            </h2>
            <p className="about-description">
              CodeLab es un grupo de programadores apasionados que se dedica a la 
              participación en hackatones y competencias de programación. Nuestro 
              objetivo es desarrollar soluciones innovadoras y competir en los 
              torneos más prestigiosos a nivel nacional e internacional.
            </p>
            <ul className="about-features">
              <li>Participación activa en hackatones</li>
              <li>Programación competitiva de alto nivel</li>
              <li>Desarrollo de proyectos innovadores</li>
              <li>Colaboración y trabajo en equipo</li>
              <li>Constante aprendizaje y mejora</li>
            </ul>
          </div>
          <div className="about-visual">
            <div className="code-block">
              <div className="code-line">
                <span className="code-keyword">class</span> <span className="code-string">CodeLab</span> <span className="code-keyword">{'{'}</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-comment">// Hackathons & Competitive Programming</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-keyword">constructor</span><span className="code-string">()</span> <span className="code-keyword">{'{'}</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">this</span>.<span className="code-string">passion</span> = <span className="code-string">'coding'</span>;
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">this</span>.<span className="code-string">focus</span> = <span className="code-string">'innovation'</span>;
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">this</span>.<span className="code-string">goal</span> = <span className="code-string">'excellence'</span>;
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-keyword">{'}'}</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;