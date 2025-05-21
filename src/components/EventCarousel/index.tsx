'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/EventPosterGrid.css';

interface Event {
  _id: string;
  name: string;
  place: string;
  date: string;
}

export default function EventCarousel() {
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
    const d = new Date(dateStr);
    return {
      day: d.getDate().toString().padStart(2, '0'),
      month: d.toLocaleString('default', { month: 'short' }),
      year: d.getFullYear().toString()
    };
  };

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      centeredSlides
      slidesPerView={1}
      spaceBetween={30}
      className="poster-carousel"
      style={{ maxWidth: '720px' }}
    >
      {events.map((event) => {
        const { day, month, year } = formatDate(event.date);
        return (
          <SwiperSlide key={event._id}>
            <div className="poster">
              <div className="lens-flare"></div>
              <div className="stripes">
                <div className="stripe-block str1"><div></div><div></div><div></div><div></div></div>
                <div className="stripe-block str2"><div></div><div></div><div></div><div></div></div>
                <div className="stripe-block str3"><div></div><div></div><div></div><div></div></div>
              </div>
              <div className="info">
                <header>
                  <h3>URBAN MUSIC</h3>
                  <p>DJ</p>
                </header>
                <main>
                  <svg id="text-1" viewBox="0 0 450 100" xmlns="http://www.w3.org/2000/svg">
                    <rect mask="url(#knockout-text-1)" />
                    <mask id="knockout-text-1">
                      <rect width="100%" height="100%" fill="white" />
                      <text x="50%" y="80" textAnchor="middle">Sergio</text>
                    </mask>
                  </svg>
                  <svg id="text-2" viewBox="0 0 450 100" xmlns="http://www.w3.org/2000/svg">
                    <rect mask="url(#knockout-text-2)" />
                    <mask id="knockout-text-2">
                      <rect width="100%" height="100%" fill="white" />
                      <text x="50%" y="80" textAnchor="middle">Telmo</text>
                    </mask>
                  </svg>
                </main>
                <section id="date">
                  <div className="circle-item">{day}</div>
                  <div className="circle-item">{month}</div>
                  <div className="circle-item">{year}</div>
                </section>
                <footer>
                  <div className="tickets">
                    MASHUPS SUMMER TOUR / 18+ Ages / MUSIC LOVERS
                  </div>
                  <div className="venue">
                    <h3>{event.name}</h3>
                    <p>{event.place}</p>
                    <p><small>@pubsky_</small></p>
                  </div>
                </footer>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}