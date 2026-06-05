import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import img1 from '../assets/593686715_1299724778859183_180269240575211972_n.jpg';
import img2 from '../assets/599530811_1309608137870847_5350105628923022112_n.jpg';
import img3 from '../assets/600215517_1308912894607038_5958026315727943443_n.jpg';
import img4 from '../assets/648285244_1381243057374021_541633479157559085_n.jpg';
import './ChurchGallery.css';

const images = [
  { id: 1, title: 'Grupo de louvor',  src: img1 },
  { id: 2, title: 'Cultos',      src: img2 },
  { id: 3, title: 'Ceia',      src: img3 },
  { id: 4, title: 'Escola Bíblica',          src: img4 },
];

const ChurchGallery = () => {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, []);

  const onMouseDown = e => { startX.current = e.clientX; };
  const onMouseUp   = e => {
    const d = startX.current - e.clientX;
    if (Math.abs(d) > 50) d > 0
      ? setCurrent(p => (p + 1) % images.length)
      : setCurrent(p => (p - 1 + images.length) % images.length);
  };
  const onTouchStart = e => { startX.current = e.touches[0].clientX; };
  const onTouchEnd   = e => {
    const d = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) d > 0
      ? setCurrent(p => (p + 1) % images.length)
      : setCurrent(p => (p - 1 + images.length) % images.length);
  };

  const openMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=R.+Scipi%C3%A3o,+235+Vila+Romana+S%C3%A3o+Paulo+SP+05047-060', '_blank');
  };

  return (
    <section id="igreja" className="gallery-section">
      <div className="gallery-inner">

        <div className="gallery-header">
          <p className="gallery-eyebrow">Nossa Igreja</p>
          <h2>Assembleia de Deus<br /><em>Paulistana</em></h2>
          <p className="gallery-desc">
            Uma comunidade acolhedora comprometida com o ensino da Palavra
            e o crescimento espiritual em Jandira.
          </p>
        </div>

        <div className="gallery-layout">

          {/* Carrossel */}
          <div
            className="carousel"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{ cursor: 'grab', userSelect: 'none' }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current].src}
                alt={images[current].title}
                className="carousel-img"
                draggable={false}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }}
              />
            </AnimatePresence>

            <div className="carousel-caption">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {images[current].title}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="carousel-progress">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`progress-bar ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>

          {/* Localização */}
          <div className="location">
            <p className="location-eyebrow">Onde estamos</p>
            <h3>Nossa Localização</h3>

            <div className="location-items">
              <div className="location-item">
                <span className="location-label">Endereço</span>
                <span className="location-value">R. Scipião, 235<br />Vila Romana — São Paulo, SP<br />05047-060</span>
              </div>
              <div className="location-item">
                <span className="location-label">Telefone</span>
                <span className="location-value">(11) 96370-3656</span>
              </div>
              <div className="location-item">
                <span className="location-label">Cultos</span>
                <span className="location-value">
                  Domingo — 9h e 18h30<br />
                  Quarta-feira — 19h30
                </span>
              </div>
            </div>

            <button className="location-btn" onClick={openMaps}>
              Ver no Google Maps
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChurchGallery;
