import React from 'react';
import './About.css';
import { FaUser, FaLaptopCode, FaChartLine, FaMedal } from 'react-icons/fa';

const About = () => {
  const technicalSkills = [
    'React.js',
    'Node.js',
    'JavaScript',
    'MongoDB',
    'Express.js',
    'Python',
    'SQL',
    'REST APIs'
  ];

  const businessSkills = [
    'Solar Sales',
    'Client Relations',
    'Data Analysis',
    'Process Optimization',
    'Training & Support',
    'Technical Products'
  ];

  const leadershipSkills = [
    'Team Leadership',
    'Operations Management',
    'Problem Solving',
    'Time Management',
    'Mentorship',
    'Strategic Planning'
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>
          <FaUser style={{marginRight: '10px', verticalAlign: 'middle', color: '#2563eb'}} />
          About Me
        </h2>
        <div className="about-content">
          <div className="about-story creative-bg">
            <p>
              After 10 years of leadership in the United States Marine Corps, I transitioned into 
              technology and sales. Currently a Sales Consultant at Sunrun since September 2024, 
              I leverage my full-stack development skills to build practical web applications that 
              solve real business problems and streamline workflows.
            </p>
            <p>
              I bring a unique combination of hands-on software development, proven sales performance, 
              and military-honed leadership to every challenge.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>
                <FaLaptopCode style={{marginRight: '8px', verticalAlign: 'middle', color: '#2563eb'}} />
                Technical Skills
              </h3>
              <div className="skill-tags">
                {technicalSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    <FaLaptopCode style={{marginRight: '6px', color: '#60a5fa', fontSize: '1em', verticalAlign: 'middle'}} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>
                <FaChartLine style={{marginRight: '8px', verticalAlign: 'middle', color: '#2563eb'}} />
                Sales & Business
              </h3>
              <div className="skill-tags">
                {businessSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    <FaChartLine style={{marginRight: '6px', color: '#60a5fa', fontSize: '1em', verticalAlign: 'middle'}} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>
                <FaMedal style={{marginRight: '8px', verticalAlign: 'middle', color: '#2563eb'}} />
                Leadership
              </h3>
              <div className="skill-tags">
                {leadershipSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    <FaMedal style={{marginRight: '6px', color: '#60a5fa', fontSize: '1em', verticalAlign: 'middle'}} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;