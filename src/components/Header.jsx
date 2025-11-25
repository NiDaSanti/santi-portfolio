import React, {useState} from 'react';
import './Header.css';
import { FaTimes, FaBars, FaCode, FaSun } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <>
      <header id="header" className="header">
        <div className="header-logo">
          <FaCode style={{marginRight: '8px', color: '#2563eb', fontSize: '1.5em', verticalAlign: 'middle'}} />
          Nicholas Santiago
        </div>
        <nav className="header-nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">
            <FaSun style={{marginRight: '4px', color: '#ffd600', fontSize: '1em', verticalAlign: 'middle'}} />Contact
          </a>
        </nav>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {menuOpen && (
            <div className="mobile-nav">
              <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                <FaSun style={{marginRight: '4px', color: '#ffd600', fontSize: '1em', verticalAlign: 'middle'}} />Contact
              </a>
            </div>
          )}
      </header>
    </>
  )
}

export default Header;