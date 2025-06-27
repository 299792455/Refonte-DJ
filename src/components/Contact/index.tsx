'use client';

import { useState } from 'react';
import '@/styles/ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', telefono: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        telefono: formData.telefono,
        message: formData.message,
      }),
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '',telefono: '', message: '' });
  } catch (error) {
    console.error('Erreur:', error);
  }
};
  return (
    <div className="contact-container">
      <h1 className='agenda-title'>Contacto </h1>
    

      <form onSubmit={handleSubmit} id="contact_form">
        
        <div className="email">
          <input type="email" placeholder="Tu email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="telefono">
  <input
    type="text"
    placeholder="Tu teléfono"
    name="telefono"
    value={formData.telefono}
    onChange={handleChange}
    required
  />
</div>
        <div className="message">
          <textarea
            name="message"
            placeholder="Quieres hablar de..."
            id="message_input"
            cols={30}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="submit">
          <input type="submit" value="Enviar" id="form_button" />
        </div>
        {submitted && <p style={{ textAlign: 'center', marginTop: '20px', color: '#474544' }}>Enviado ✔</p>}
      </form>
    </div>
  );
}