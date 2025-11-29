import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading"><FaEnvelope style={{marginRight: '10px', verticalAlign: 'middle'}} />Contact</h2>
      <p tabIndex="0">Feel free to reach out for opportunities, collaborations, or questions.</p>
      <div className="contact-list" role="list">
        <a href="mailto:santiago.nicholas.a@gmail.com" className="contact-item" aria-label="Email: santiago.nicholas.a@gmail.com" role="listitem" tabIndex="0">
          <FaEnvelope aria-hidden="true" /> <span>santiago.nicholas.a@gmail.com</span>
        </a>
        <a href="tel:+19199314345" className="contact-item" aria-label="Phone: (919) 931-4345" role="listitem" tabIndex="0">
          <FaPhone aria-hidden="true" /> <span>(919) 931-4345</span>
        </a>
        <a href="https://www.linkedin.com/in/nicholas-santiago-28b405137/" target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="LinkedIn: Nicholas Santiago" role="listitem" tabIndex="0">
          <FaLinkedin aria-hidden="true" /> <span>LinkedIn</span>
        </a>
        <a href="https://github.com/NiDaSanti" target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="GitHub: NiDaSanti" role="listitem" tabIndex="0">
          <FaGithub aria-hidden="true" /> <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
