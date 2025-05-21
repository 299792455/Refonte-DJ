'use client';

import { useEffect, useState } from 'react';
import '../../styles/EventAgenda.css';

type Event = {
  _id: string;
  name: string;
  place: string;
  date: string;
};

export default function EventAgenda() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <section className="agenda-section">
      <h2>Agenda</h2>
      <ul className="agenda-list">
        {events.map((event) => (
          <li key={event._id} className="agenda-item">
            <span className="agenda-date">{new Date(event.date).toLocaleDateString()}</span>
            <span className="agenda-name">{event.name}</span>
            <span className="agenda-place">@ {event.place}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
