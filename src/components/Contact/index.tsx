'use client';

import { useState } from 'react';
import '@/styles/ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="container">
      <h1 className='Form-Title'>&bull; Keep in Touch &bull;</h1>
      <div className="underline"></div>
      <div className="icon_wrapper">
        <svg className="icon" viewBox="0 0 145.192 145.192">
          <path d="M126.82,32.694c-2.804...Z"></path>
        </svg>
      </div>

      <form onSubmit={handleSubmit} id="contact_form">
        
        <div className="email">
          <input type="email" placeholder="My e-mail is" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="message">
          <textarea
            name="message"
            placeholder="I'd like to chat about"
            id="message_input"
            cols={30}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="submit">
          <input type="submit" value="Send Message" id="form_button" />
        </div>
        {submitted && <p style={{ textAlign: 'center', marginTop: '20px', color: '#474544' }}>Message sent ✔</p>}
      </form>
    </div>
  );
}