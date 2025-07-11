'use client';

import React, { useRef, useState } from "react";
import '@/styles/ContactForm.css';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const telefono = formData.get("telefono");
    const message = formData.get("message");
    const honeypot = formData.get("honeypot");

    if (honeypot) return setStatus("Bloqueado por honeypot.");

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, telefono, message, honeypot }),
    });

    if (res.ok) {
      setStatus("¡Mensaje enviado!");
      formRef.current?.reset();
    } else {
      setStatus("Error al enviar el mensaje.");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="agenda-title">Contacto</h1>
      <form onSubmit={handleSubmit} ref={formRef} id="contact_form">
        <input type="text" name="honeypot" style={{ display: 'none' }} autoComplete="off" />
        <div className="email">
          <input type="email" name="email" placeholder="Tu email" required />
        </div>
        <div className="telefono">
          <input type="text" name="telefono" placeholder="Tu teléfono" required />
        </div>
        <div className="message">
          <textarea name="message" placeholder="Quieres hablar de..." required></textarea>
        </div>
        <div className="submit">
  <input type="submit" value="Enviar" id="form_button" />
</div>
{status && (
  <p style={{ textAlign: 'center', marginTop: '20px', color: '#474544' }}>
    Enviado ✔
  </p>
)}
      </form>
    </div>
  );
}
