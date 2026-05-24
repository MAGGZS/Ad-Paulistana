import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import './StatisticsCards.css';

const StatCard = ({ end, label, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration / 16);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration, delay]);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="stat-number">{count.toLocaleString('pt-BR')}+</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

const StatisticsCards = () => {
  return (
    <section className="statistics">
      <div className="statistics-container">
        <StatCard end={150} label="Igrejas" delay={0} />
        <StatCard end={50000} label="Membros" delay={200} />
        <StatCard end={2500} label="Cultos Realizados" delay={400} />
        <StatCard end={10000} label="Pedidos de Oração" delay={600} />
      </div>
    </section>
  );
};

export default StatisticsCards;
