'use client';

import Image from 'next/image';
import '@/styles/BrandCarousel.css';

const brandLogos = [
  {
    src: 'https://i.postimg.cc/pdcHKLww/logo-akai.png',
    alt: 'Akai Professional'
  },
  {
    src: 'https://i.postimg.cc/d17K6KvL/logo-pioneer.png',
    alt: 'Pioneer'
  },
  {
    src: 'https://i.postimg.cc/5tyc9MXn/logo-sennheiser.png',
    alt: 'Sennheiser'
  },
  {
    src: 'https://i.postimg.cc/QCLvq90y/logo-tecnics.png',
    alt: 'Technics'
  },
  {
    src: 'https://i.postimg.cc/fWXGRCbn/logo-JBL.png',
    alt: 'JBL'
  },
  {
    src: 'https://i.postimg.cc/FHF8GQVN/logo-yamaha.png',
    alt: 'Yamaha'
  },
];

export default function BrandCarousel() {
  return (
    <div className="client-slider">
      <div className="client-slide-track">
        {brandLogos.map((logo, index) => (
          <div className="client-slide" key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={60}
              style={{
                objectFit: 'contain',
                height: '60px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

