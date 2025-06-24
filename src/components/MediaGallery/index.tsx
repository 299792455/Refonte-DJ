'use client';
import React from 'react';
import '../../styles/MediaGallery.css';

const mediaItems = [
   {
    type: 'image',
    src: 'https://i.postimg.cc/mZMWXFSM/Jordan-Bouzada-3.jpg',
  },
   {
    type: 'image',
    src: 'https://i.postimg.cc/WpkbRFyX/Dj-Telmo-Gallery3.jpg',
  },
  
   {
    type: 'image',
    src: 'https://i.postimg.cc/tRdmnd5r/E4-A2167sax.jpg',
  },
 
  {
    type: 'image',
    src: 'https://i.postimg.cc/SsM3vwcq/Jordan-Bouzada-14.jpg',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/6pbP590t/Jordan-Bouzada-27.jpg',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/wMvvJ02z/TFP1644.jpg',
  },
];

export default function MediaGallery() {
  return (
    <div className="media-wrapper">
      <h1 className="agenda-title">MEDIAS</h1>
      <div className="media-container">
        {mediaItems.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.src} alt="DJ Sergio Telmo media" />
            {/* <div className="card__head">DJ Sergio Telmo</div> */}

          </div>
        ))}
      </div>
    </div>
  );
}