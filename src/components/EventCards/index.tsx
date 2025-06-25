'use client';

import { useEffect, useState } from 'react';
import '@/styles/EventAgenda.css';

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

  const formatDate = (dateStr: string) => {
    const dateObj = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
    return dateObj.toLocaleDateString('en-US', options);
  };

  return (
    <section className="agenda-wrapper">
      <h1 className="agenda-title">FECHAS</h1>
      <div className="content">
        {events.map((event) => (
          <div className="row" key={event._id}>
            <div className="date">{formatDate(event.date)}</div>
            <div className="city">{event.place}</div>
            <div className="venue">{event.name}</div>
            <a
  href="https://www.instagram.com/pubsky_/"
  className="ticket"
  target="_blank"
  rel="noopener noreferrer"
>
  Sitio Web
</a>
          </div>
        ))}
      </div>
    </section>
  );
}
