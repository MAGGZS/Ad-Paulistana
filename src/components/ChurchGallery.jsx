import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './ChurchGallery.css';

const images = [
  { id: 1, title: 'Grupo de louvor',       src: 'https://scontent.fcgh15-1.fna.fbcdn.net/v/t39.30808-6/561648907_1254384173393244_7071785136394207181_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeER6QOgiegDJk_2pJpUmkAv0Kl3e_sxZr3QqXd7-zFmvaP7aAOl9MtNxD-1RVKUxtywsefoOaFAsFBsIahvQGH2&_nc_ohc=wN_n8v3_u8EQ7kNvwFfG3R-&_nc_oc=AdoOKExHjy_JuZ9mUP8Eqn9nowG4E_opNRZuJrM6D0gdarDXGizKnXhubh7fb7Zao5qHYujlyBdI4Hr4JPt9XZ_2&_nc_zt=23&_nc_ht=scontent.fcgh15-1.fna&_nc_gid=5EqnSW6akK_10ZMKip25Fg&_nc_ss=7b2a8&oh=00_Af51om0N3SLX67O-NbYZgp57aj9br9klWR75UUT6MPuJBw&oe=6A1AC34E' },
  { id: 2, title: 'Auditório',             src: 'https://scontent.fcgh15-1.fna.fbcdn.net/v/t51.82787-15/703199233_18206114896341522_1317695510014222147_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGb08vrwESqyuDD6JtyrBBfllD69bNgHQeWUPr1s2AdBwPVwojWzsaLplKIdJqKm-s04zfhOmz3BT_btKN_cplr&_nc_ohc=6wKhg-xCi2MQ7kNvwEZ1fOR&_nc_oc=AdqcPrd3v9drZ0dzHscQ9cjvrskbXfn7smYCRfukl0PkOVC3jgqNzrJrVh3wcp5QAS-81ZiJsqEbntn5JreeiEdJ&_nc_zt=23&_nc_ht=scontent.fcgh15-1.fna&_nc_gid=M1prr5zDDr-czThaVWR_pA&_nc_ss=7b2a8&oh=00_Af6Mg-r3e3XbkxyTGEFEmajQVrHFCH9su7Feai_dCtz67g&oe=6A1AD3F5' },
  { id: 3, title: 'Cultos',                src: 'https://scontent.fcgh39-1.fna.fbcdn.net/v/t39.30808-6/648285244_1381243057374021_541633479157559085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFGivAySPE8aY0F-G6nPK8mWT3zgTCK51NZPfOBMIrnU7zMUghXBAhYJKAfWu32oGZO7Hso9mRz0vn5vDdxBhpU&_nc_ohc=0WQQnSyRktwQ7kNvwGmnpT7&_nc_oc=AdrGwFXHCqgpvdyKdWaTvuz6clv3tkJfD99I8DF7ev1bU9Bax-3sBCa_AgSxyau2gCNfal6XXO6bn80yhnVuhKX0&_nc_zt=23&_nc_ht=scontent.fcgh39-1.fna&_nc_gid=dkqGlpL5c9aM87sl2BVJYA&_nc_ss=7b2a8&oh=00_Af6bpN9nQgQ7lOz-f5pcb9IYCVfkpPBU4rRVESGVpzUzJA&oe=6A1ABEA5' },
  { id: 4, title: 'Escola Bíblica',        src: 'https://scontent.fcgh39-1.fna.fbcdn.net/v/t39.30808-6/593686715_1299724778859183_180269240575211972_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGArrVOxd9c29D2-yhYSMVQF-Dg1r_ApUwX4ODWv8ClTHpuWsapQqDED4KmTm8jiLPVYiPOc62pkrFYJFPCSxE1&_nc_ohc=jEXxTDwSFj8Q7kNvwF5ixOp&_nc_oc=AdpAUfxHiSu9c4NaJ4ye6N3q62ijVcPa7BdgxfzpUeTAlCrNra-4M9_to7---BbxF7D8sNX-RpsGhTbX3SdVvPFV&_nc_zt=23&_nc_ht=scontent.fcgh39-1.fna&_nc_gid=Ae7XdOwpwKFMSTui1r7Iuw&_nc_ss=7b2a8&oh=00_Af6Z_k3SNklA_tmOMVjzrCgfy4E8A1LrHgbZkC-mBwjO8A&oe=6A1ADAF6' },
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
