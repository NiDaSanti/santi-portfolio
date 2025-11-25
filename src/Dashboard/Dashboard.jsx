import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Dashboard = () => {
  return(
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </>
  )
}

export default Dashboard