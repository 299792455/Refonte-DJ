'use client';

import { useEffect, useState } from 'react';
import '../../styles/Navbar.css';
import ContactForm from '../Contact/index';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScroll);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${hidden ? 'navbar--hidden' : ''}`}>
        <div className="container">
          <a href="#" className="brand">DJ Sergio Telmo</a>

          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <div
              className="burger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </div>

            <ul className="menu-inner">
              <li className="menu-item"><a href="#" className="menu-link">Inicio</a></li>
              <li className="menu-item"><a href="#" className="menu-link">My Beats</a></li>
              <li className="menu-item"><a href="#" className="menu-link">Eventos</a></li>
              <li className="menu-item">
                <a
                  href="#"
                  className="menu-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="bio-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="bio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="bio-modal-close" onClick={() => setShowModal(false)}>✕</button>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
