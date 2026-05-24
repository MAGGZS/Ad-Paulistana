import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './ChurchGallery.css';

const images = [
  { id: 1, title: 'Fachada Principal',     src: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Auditório',             src: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Área de Convivência',   src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Escola Bíblica',        src: 'https://images.unsplash.com/photo-1502224562085-639556652f33?w=1200&auto=format&fit=crop' },
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
    window.open('https://www.google.com/maps/search/?api=1&query=Assembleia+de+Deus+Paulistana+Jandira+SP', '_blank');
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
                <span className="location-value">Rua Gabriela, 123<br />Jandira Gabriela 1 — Jandira, SP</span>
              </div>
              <div className="location-item">
                <span className="location-label">Telefone</span>
                <span className="location-value">(11) 9999-8888</span>
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
