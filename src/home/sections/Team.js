import React from 'react';
import '../styles/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Líder de Hackathones',
      skills: ['React', 'Node.js', 'Python'],
      avatar: '👨‍💻'
    },
    {
      name: 'Sofia Chen',
      role: 'Especialista en Algoritmos',
      skills: ['C++', 'Java', 'Competitive Programming'],
      avatar: '👩‍💻'
    },
    {
      name: 'Carlos Mendez',
      role: 'Full Stack Developer',
      skills: ['JavaScript', 'Python', 'AWS'],
      avatar: '👨‍💻'
    },
    {
      name: 'Maria Gonzalez',
      role: 'UI/UX Designer',
      skills: ['Figma', 'React', 'CSS'],
      avatar: '👩‍🎨'
    },
    {
      name: 'David Kim',
      role: 'Data Scientist',
      skills: ['Python', 'Machine Learning', 'R'],
      avatar: '👨‍🔬'
    },
    {
      name: 'Ana Torres',
      role: 'Mobile Developer',
      skills: ['React Native', 'Flutter', 'iOS'],
      avatar: '👩‍💻'
    }
  ];

  return (
    <section className="team">
      <div className="container">
        <div className="team-header">
          <h2 className="team-title">Nuestro Equipo</h2>
          <p className="team-subtitle">
            Conoce a los programadores talentosos que forman parte de CodeLab
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="member-avatar">
                {member.avatar}
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-skills">
                {member.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
