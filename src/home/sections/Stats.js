import React from 'react';
import '../styles/Stats.css';

const Stats = () => {
  const stats = [
    {
      number: '50+',
      label: 'Hackathones Participados',
      icon: '🏆'
    },
    {
      number: '15+',
      label: 'Premios Obtenidos',
      icon: '🥇'
    },
    {
      number: '100+',
      label: 'Proyectos Desarrollados',
      icon: '💻'
    },
    {
      number: '25+',
      label: 'Miembros Activos',
      icon: '👥'
    }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-content">
          <div className="stats-header">
            <h2 className="stats-title">Nuestros Logros</h2>
            <p className="stats-subtitle">
              Números que respaldan nuestra pasión y dedicación
            </p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
