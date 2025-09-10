import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏆',
      title: 'Hackathones',
      description: 'Participamos en hackatones nacionales e internacionales, desarrollando soluciones innovadoras en tiempo récord.',
      features: ['Desarrollo ágil', 'Innovación', 'Trabajo en equipo', 'Presentaciones']
    },
    {
      icon: '⚡',
      title: 'Programación Competitiva',
      description: 'Competimos en torneos de programación algorítmica, resolviendo problemas complejos con eficiencia.',
      features: ['Algoritmos avanzados', 'Optimización', 'Estructuras de datos', 'Matemáticas']
    },
    {
      icon: '🚀',
      title: 'Desarrollo de Proyectos',
      description: 'Creamos proyectos innovadores que combinan diferentes tecnologías y solucionan problemas reales.',
      features: ['Full-stack', 'APIs', 'Bases de datos', 'Deployment']
    },
    {
      icon: '🤝',
      title: 'Mentoría',
      description: 'Compartimos conocimiento y mentorizamos a nuevos programadores en su camino de aprendizaje.',
      features: ['Code reviews', 'Tutorías', 'Workshops', 'Networking']
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Nuestras Actividades</h2>
          <p className="services-subtitle">
            Nos especializamos en diferentes áreas de la programación y el desarrollo tecnológico
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
