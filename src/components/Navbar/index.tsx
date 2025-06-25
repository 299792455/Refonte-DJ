'use client';

import { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import '../../styles/Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll dans n'importe quel sens, on montre la navbar
      if (currentScrollY !== lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('lock-scroll', isMenuOpen);
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : ''}`}>
      <div className="container">
        <a href="#" className="brand">
          <img src="/logo-DjTelmo.png" alt="Logo DJ" className="h-8 w-auto" />
        </a>

        <div
          className={`burger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>

        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul
            className="menu-inner"
            onClick={(e) => {
              const target = e.target as HTMLElement;
              if (target.tagName === 'A') setIsMenuOpen(false);
            }}
          >
            <li className="menu-item">
              <a href="#bio" className="menu-link">Inicio</a>
            </li>
            <li className="menu-item">
              <a href="#beats" className="menu-link">My Beats</a>
            </li>
            <li className="menu-item">
              <a href="#eventos" className="menu-link">Eventos</a>
            </li>
            <li className="menu-item contact-cta">
              <a href="#contact" className="menu-link">Contacto</a>
            </li>
            <a
              href="https://www.instagram.com/sergiotelmo_?igsh=Z201bWx6ZTdncXgz"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-icon"
              aria-label="Instagram"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaInstagram />
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
