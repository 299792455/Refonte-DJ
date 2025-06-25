'use client';

import { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
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

  useEffect(() => {
    document.body.classList.toggle('lock-scroll', isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`navbar ${hidden ? 'navbar--hidden' : ''}`}>
        <div className="container">
          <a href="#" className="brand">
   <img src="/logo-DjTelmo.png" alt="Logo DJ" className="h-10 w-auto" />
</a>

          {/* Burger button */}
       <div
  className={`burger ${isMenuOpen ? 'open' : ''}`}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <span className="burger-line"></span>
  <span className="burger-line"></span>
  <span className="burger-line"></span>
</div>


          {/* Menu */}
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="menu-inner">
              <li className="menu-item"><a href="#" className="menu-link">Inicio</a></li>
              <li className="menu-item"><a href="#" className="menu-link">My Beats</a></li>
              <li className="menu-item"><a href="#" className="menu-link">Eventos</a></li>
              <li className="menu-item contact-cta">
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
              <a
                  href="https://www.instagram.com/ton_instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta-icon"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
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
