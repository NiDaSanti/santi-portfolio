import React from 'react';
import './Hero.css';
import { FaMapMarkerAlt, FaUserTie, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return(
    <div className="hero-container" id="hero">
      <div className="hero-row">
        <img
          src={process.env.PUBLIC_URL + '/cover-photo.png'}
          alt="Nicholas Santiago Cover"
          className="hero-cover-photo"
        />
        <div className="hero-content">
          <h3>
            <FaMapMarkerAlt style={{marginRight: '8px', verticalAlign: 'middle'}} />
            Los Angeles, CA
          </h3>
          <h3>
            <FaUserTie style={{marginRight: '8px', verticalAlign: 'middle'}} />
            Fullstack Developer | Sales | Marine Veteran
          </h3>
          <p>
            I bring a decade of military leadership, a strong record in sales, and hands-on experience in software development. I build solutions that drive results.
          </p>
              <a href="/SantiagoNicholasResume-2025%20(1).pdf" download="SantiagoNicholasResume-2025.pdf" className="resume-btn">
            <FaFileDownload style={{marginRight: '8px', verticalAlign: 'middle'}} />
            Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero