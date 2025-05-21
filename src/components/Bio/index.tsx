'use client';

import { useState } from 'react';
import ContactForm from '@/components/Contact';
import '@/styles/Bio.css';

export default function Bio() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bio-wrapper">
      <div className="text-zone">
        <div className="hero-section">
  <div className="hero-line">
    <span>D</span>
    <span>J</span>
  </div>
  <div className="hero-line">
    <span>S</span>
    <span>E</span>
    <span>R</span>
    <span>G</span>
    <span>I</span>
    <span>O</span>
  </div>
  <div className="hero-line">
    <span>T</span>
    <span>E</span>
    <span>L</span>
    <span>M</span>
    <span>O</span>
  </div>
</div>


        <div className="info-section">
          <div className="bio-block">
            <p className="line">DJ desde los <strong>14 años</strong>, ahora <strong>22</strong>.</p>
            <p className="line">Residente en <strong>Sky Pub</strong> — A Estrada.</p>
            <p className="line">Shows: <strong>Santiago, Pontevedra, Ourense</strong>.</p>
            <p className="line">Producción en <strong>FL Studio</strong> — mashups & edits.</p>
            <p className="line highlight">2025: nuevos sonidos, nuevas redes.</p>
          </div>
          <button className="bio-contact-btn" onClick={() => setShowModal(true)}>Contactar</button>
        </div>
      </div>

      <div className="image-zone">
        <img
          src="https://i.postimg.cc/fR1D5QCx/verde-Modifi.png"
          alt="DJ Sergio Telmo"
          className="bio-image"
        />
      </div>

      {showModal && (
        <div className="bio-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="bio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="bio-modal-close" onClick={() => setShowModal(false)}>✕</button>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
}