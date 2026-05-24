import { motion } from 'framer-motion';
import { Icons } from './icons';
import './WorshipCard.css';

const WorshipCard = ({ worship, delay = 0 }) => {
  return (
    <motion.div
      className="worship-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <div className="worship-image">
        <img src={worship.image} alt={worship.title} />
        <div className="worship-overlay"></div>
        <div className="worship-time">
          <span className="time-icon">{Icons.clock}</span>
          <span>{worship.time}</span>
        </div>
      </div>
      <div className="worship-content">
        <h3>{worship.title}</h3>
        <p className="worship-date">{worship.date}</p>
        <p className="worship-description">{worship.description}</p>
        <button className="worship-btn">Saiba Mais</button>
      </div>
    </motion.div>
  );
};

export default WorshipCard;
