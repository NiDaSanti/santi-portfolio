import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Dashboard = () => {
  return(
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default Dashboard