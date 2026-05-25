import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      />
      <div className="hero-overlay" />

      <div className="hero-body">
        <motion.span
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Jandira — Gabriela 1
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Assembleia de Deus<br />
          <em className='hero-badge'>Paulistana</em>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Fé, comunidade e propósito.<br />
          Venha fazer parte desta família.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#oracoes" className="btn-primary">Enviar Pedido de Oração</a>
          <a href="#cultos"  className="btn-ghost">Ver Cultos</a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span />
      </motion.div>
    </section>
  );
};

export default HeroSection;
