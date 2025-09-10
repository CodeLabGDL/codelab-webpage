import React from 'react';
import Hero from './sections/Hero';
import AboutSection from './sections/AboutSection';
import Services from './sections/Services';
import Stats from './sections/Stats';
import Team from './sections/Team';
import CTA from './sections/CTA';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutSection />
      <Services />
      <Stats />
      <Team />
      <CTA />
    </div>
  );
};

export default Home;
