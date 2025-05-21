'use client';

import { useEffect, useState } from 'react';
import '../../styles/EventCards.css';

type Event = {
  _id: string;
  name: string;
  place: string;
  date: string;
};

export default function EventCards() {
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
    <div className="container">
      {events.map((event, index) => (
        <div className="box" key={event._id}>
          <span></span>
          <div className="content">
            <h2>{new Date(event.date).toLocaleDateString('fr-FR')}</h2>
            <p>{event.name}<br />@ {event.place}</p>
            <a href="#">Voir plus</a>
          </div>
        </div>
      ))}
    </div>
  );
}
