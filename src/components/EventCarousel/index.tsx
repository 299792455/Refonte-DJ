'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

import '@/styles/EventCarousel.css';

interface Event {
  _id: string;
  name: string;
  place: string;
  date: string;
}

export default function EventCarousel() {
  const [events, setEvents] = useState<Event[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperClass | null>(null);

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
      year: d.getFullYear().toString(),
    };
  };

  return (
    <section className="event-carousel">
      <Swiper
       
        slidesPerView="auto"
        centeredSlides
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {events.map((event, index) => {
          const { day, month, year } = formatDate(event.date);
          return (
            <SwiperSlide
  key={event._id}
  className={`event-slide ${activeIndex === index ? 'active' : 'inactive'}`}
  style={{
    width: activeIndex === index ? '500px' : '320px',
    transition: 'width 0.4s ease-in-out',
    
  }}
>
              <div
                className={`poster-wrapper ${activeIndex === index ? 'active' : ''}`}
                style={{
    width: activeIndex === index ? '500px' : '320px',
    transition: 'width 0.4s ease-in-out',
  }}
                onClick={() => {
                  setActiveIndex(index);
                  swiperRef.current?.slideTo(index);
                }}
              >
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
                      <svg id="text-1" viewBox="0 0 450 100">
                        <rect mask="url(#knockout-text-1)" />
                        <mask id="knockout-text-1">
                          <rect width="100%" height="100%" fill="white" />
                          <text x="50%" y="80" textAnchor="middle">Sergio</text>
                        </mask>
                      </svg>
                      <svg id="text-2" viewBox="0 0 450 100">
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

                    <footer className="desc">
                      <div className="tickets">Mashups Summer Tour</div>
                      <div className="venue">
                        <h3>{event.name}</h3>
                        <p>{event.place}</p>
                        <p><small>@pubsky_</small></p>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
