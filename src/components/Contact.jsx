import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
  <h2><FaEnvelope style={{marginRight: '10px', verticalAlign: 'middle'}} />Contact</h2>
      <p>Feel free to reach out for opportunities, collaborations, or questions.</p>
      <div className="contact-list">
        <a href="mailto:santiago.nicholas.a@gmail.com" className="contact-item" aria-label="Email">
          <FaEnvelope /> santiago.nicholas.a@gmail.com
        </a>
        <a href="tel:+19199314345" className="contact-item" aria-label="Phone">
          <FaPhone /> (919) 931-4345
        </a>
        <a href="https://www.linkedin.com/in/nicholassantiago" target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="LinkedIn">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/NiDaSanti" target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="GitHub">
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
