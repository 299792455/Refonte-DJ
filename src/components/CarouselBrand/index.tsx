'use client';
import { useEffect, useRef, useState } from 'react';


const logos = [
  'https://i.postimg.cc/zG6sjMQK/logo-tecnics-Modifi.png',
  'https://i.postimg.cc/rsHjT6x9/Logo-Dj-Telmo.png',
  'https://i.postimg.cc/sXD4ZfJc/akai-logo-Modifi.png',
  'https://i.postimg.cc/BvJxdZR0/logo-pioneer-Modifi.png',
  'https://i.postimg.cc/nzzqhRHS/Sennheiser-logo-new-Modifi.png',
  'https://i.postimg.cc/zG6sjMQK/logo-tecnics-Modifi.png',
  'https://i.postimg.cc/rsHjT6x9/Logo-Dj-Telmo.png',
  'https://i.postimg.cc/sXD4ZfJc/akai-logo-Modifi.png',
  'https://i.postimg.cc/BvJxdZR0/logo-pioneer-Modifi.png',
  'https://i.postimg.cc/nzzqhRHS/Sennheiser-logo-new-Modifi.png',
];

export default function CarouselBrand() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const fullLogos = [...logos, ...logos]; 
    track.innerHTML = '';

    fullLogos.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.className =
        'h-[1rem] xl:h-[2rem] object-contain';
      img.alt = 'Logo';
      track.appendChild(img);
    });

    let position = 0;
    const speed = 1;

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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="left-0 w-full z-40 overflow-hidden border-t border-b border-[#1ed760] py-4 !py-4">
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform gap-12" />
    </div>
  );
}
