'use client';
import React from 'react';
import '../../styles/MediaGallery.css';

const mediaItems = [
  {
    type: 'image',
    src: 'https://i.postimg.cc/wMvvJ02z/TFP1644.jpg',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/mgwgdvn4/Dj-Telmo-Gallery2.jpg',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/WpkbRFyX/Dj-Telmo-Gallery3.jpg',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/6QqvJrFy/Dj-Telmo-Gallery4.jpg',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/CL0nLTWy/Dj-Telmo-Gallery5.jpg',
  },
];

export default function MediaGallery() {
  return (
    <div className="media-wrapper">
      <h1 className="media-title">Medias</h1>
      <div className="media-container">
        {mediaItems.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.src} alt="DJ Sergio Telmo media" />
            <div className="card__head">DJ Sergio Telmo</div>
          </div>
        ))}
      </div>
    </div>
  );
}