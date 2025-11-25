import React from 'react';
import './Experience.css';
import { FaBuilding, FaMapMarkerAlt, FaStar, FaBriefcase, FaMedal, FaLaptopCode, FaChartLine } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2>
          <FaBriefcase style={{marginRight: '10px', verticalAlign: 'middle', color: '#2563eb'}} />
          Experience
        </h2>

        {/* Sunrun - Featured Current Organization */}
        <div className="featured-experience creative-bg">
          <div className="featured-header">
            <img src="/logos/sunrun.png" alt="Sunrun" className="featured-logo" />
            <div className="featured-info">
              <h3>
                <FaBuilding style={{marginRight: '8px', verticalAlign: 'middle', color: '#2563eb'}} />
                Sunrun
              </h3>
              <p className="date-range">
                <FaMapMarkerAlt style={{marginRight: '6px', verticalAlign: 'middle', color: '#60a5fa'}} />
                September 2024 - Present | Los Angeles, CA
              </p>
            </div>
          </div>
          <div className="featured-achievements">
            <ul>
              <li><FaStar style={{marginRight: '6px', color: '#2563eb', verticalAlign: 'middle'}} />Sales Consultant: Consulting with homeowners on solar energy solutions and energy efficiency</li>
              <li><FaLaptopCode style={{marginRight: '6px', color: '#2563eb', verticalAlign: 'middle'}} />Developed custom web applications to optimize sales prospecting and workflow management</li>
              <li><FaMedal style={{marginRight: '6px', color: '#2563eb', verticalAlign: 'middle'}} />Leveraged technical expertise to explain complex solar technology and financial products</li>
              <li><FaChartLine style={{marginRight: '6px', color: '#2563eb', verticalAlign: 'middle'}} />Built strong client relationships through consultative sales approach</li>
            </ul>
          </div>
        </div>

        {/* Previous Experience Grouped by Organization */}
        <div className="previous-experience">
          <h3 className="previous-title">
            <FaBriefcase style={{marginRight: '8px', verticalAlign: 'middle', color: '#2563eb'}} />
            Previous Experience
          </h3>
          <div className="timeline">
            {/* Chepe Demo and Trash Haul */}
            {/* <div className="timeline-item">
              <img src="/logos/chepe.png" alt="Chepe Demo" className="timeline-logo" />
              <div className="timeline-content">
                <h4>Chepe Demo and Trash Haul</h4>
                <p className="dates">2022 - Present | Los Angeles, CA</p>
                <p className="description">
                  Roles: Software Developer, Laborer
                  <br />
                  • Designed and developed website and mobile app for tracking customer records and service routes
                  <br />
                  • Provided training and support to staff, improving operational efficiency and data accuracy
                  <br />
                  • Maintained and updated web applications as needed
                  <br />
                  • Performed daily trash and debris collection, assisted in route planning, and customer data entry
                </p>
              </div>
            </div> */}

            {/* Google (via Adecco) */}
            <div className="timeline-item tech">
              <img src="/logos/google.png" alt="Google" className="timeline-logo" />
              <div className="timeline-content">
                <h4>
                  <FaBuilding style={{marginRight: '6px', verticalAlign: 'middle', color: '#2563eb'}} />
                  Google (via Adecco)
                </h4>
                <p className="dates">
                  <FaMapMarkerAlt style={{marginRight: '6px', verticalAlign: 'middle', color: '#60a5fa'}} />
                  2021 - 2022 | Los Angeles, CA
                </p>
                <p className="description">
                  Roles: Web Developer (Ads Quality Admin)
                  <br />
                  <FaStar style={{marginRight: '4px', color: '#2563eb', verticalAlign: 'middle'}} /> Enhanced advertising quality through data analysis and reporting
                  <br />
                  <FaLaptopCode style={{marginRight: '4px', color: '#2563eb', verticalAlign: 'middle'}} /> Implemented automated language locale validation system using Google Apps Script
                  <br />
                  <FaChartLine style={{marginRight: '4px', color: '#2563eb', verticalAlign: 'middle'}} /> Improved productivity and data accuracy for advertising operations
                </p>
              </div>
            </div>

            {/* Code The Dream */}
            <div className="timeline-item tech">
              <img src="/logos/code-the-dream.png" alt="Code The Dream" className="timeline-logo" />
              <div className="timeline-content">
                <h4>
                  <FaBuilding style={{marginRight: '6px', verticalAlign: 'middle', color: '#2563eb'}} />
                  Code The Dream
                </h4>
                <p className="dates">
                  <FaMapMarkerAlt style={{marginRight: '6px', verticalAlign: 'middle', color: '#60a5fa'}} />
                  2019 - 2021 | Durham, NC
                </p>
                <p className="description">
                  Roles: Front-End Developer Intern
                  <br />
                  <FaLaptopCode style={{marginRight: '4px', color: '#2563eb', verticalAlign: 'middle'}} /> Designed wireframes and landing pages to enhance user interface
                  <br />
                  <FaLaptopCode style={{marginRight: '4px', color: '#2563eb', verticalAlign: 'middle'}} /> Developed internal web application for personnel and project management using React.js and Airtable
                  <br />
                  <FaLaptopCode style={{marginRight: '4px', color: '#2563eb', verticalAlign: 'middle'}} /> Delivered mobile app used by client organization for daily operations
                </p>
              </div>
            </div>

            {/* United States Marine Corps */}
            <div className="timeline-item usmc">
              <img src="/logos/usmc.png" alt="USMC" className="timeline-logo" />
              <div className="timeline-content">
                <h4>
                  <FaMedal style={{marginRight: '6px', verticalAlign: 'middle', color: '#ffd700'}} />
                  United States Marine Corps
                </h4>
                <p className="dates">
                  2007 - 2016
                </p>
                <p className="description">
                  Roles: Recruiter, Supply Manager, Operations Manager
                  <br />
                  <FaMedal style={{marginRight: '4px', color: '#ffd700', verticalAlign: 'middle'}} /> Mentored new and potential employees, represented USMC in community outreach
                  <br />
                  <FaMedal style={{marginRight: '4px', color: '#ffd700', verticalAlign: 'middle'}} /> Managed supply and operations, maintained unit readiness and accountability
                  <br />
                  <FaMedal style={{marginRight: '4px', color: '#ffd700', verticalAlign: 'middle'}} /> Led training and planning for company of 120+ Marines
                  <br />
                  <FaMedal style={{marginRight: '4px', color: '#ffd700', verticalAlign: 'middle'}} /> Managed professional growth, counseling, and evaluation of personnel
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;