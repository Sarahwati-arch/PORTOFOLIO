import React from 'react';

const images = [
  '/img/me/aws.jpeg',
  '/img/me/gdg.jpeg',
  '/img/me/googleind.jpeg',
  '/img/me/googlesg.jpeg',
  '/img/me/mc.jpeg',
  '/img/me/pudc.jpeg',
  '/img/me/iot.jpeg'
];

export default function ImageMarquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-content">
        <ul className="marquee-list">
          {images.map((src, idx) => (
            <li key={`img-${idx}`}>
              <div className="marquee-item">
                <img src={src} alt="Gallery" />
              </div>
            </li>
          ))}
        </ul>
        {/* Duplicate list for seamless infinite scroll */}
        <ul className="marquee-list" aria-hidden="true">
          {images.map((src, idx) => (
            <li key={`img-dup-${idx}`}>
              <div className="marquee-item">
                <img src={src} alt="Gallery" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
