'use client';
import { useEffect, useRef, useState } from 'react';

const items = [
  'DISFRUTA DE TU OFERTA DE BIENVENIDA EN LA CONTRATACIÓN DE CADA PACK',
  '***',
  'DISFRUTA DE TU OFERTA DE BIENVENIDA EN LA CONTRATACIÓN DE CADA PACK',
  '***',
];

export default function CarouselBrand() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const fullItems = [...items, ...items];
    track.innerHTML = '';

    fullItems.forEach((item) => {
      const div = document.createElement('div');
      div.className =
        'px-6 py-1 text-[1.5rem] xl:text-[2rem] text-white font-light whitespace-nowrap font-funnel';
      div.textContent = item;
      track.appendChild(div);
    });

    let position = 0;
    const speed = 2;

    const animate = () => {
      position -= speed;
      if (track.scrollWidth / 2 + position <= 0) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Masque si on descend un peu
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="left-0 w-full z-40 overflow-hidden">
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform" />
    </div>
  );
}
