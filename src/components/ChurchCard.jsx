import { motion } from 'framer-motion';
import './ChurchCard.css';

const ChurchCard = ({ church, delay = 0 }) => {
  return (
    <motion.div
      className="church-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="church-image">
        <img src={church.image} alt={church.name} />
        <div className="church-overlay"></div>
      </div>
      <div className="church-info">
        <h3>{church.name}</h3>
        <p className="church-address">{church.address}</p>
        <p className="church-schedule">{church.schedule}</p>
        <button className="church-details-btn">Ver Detalhes</button>
      </div>
    </motion.div>
  );
};

export default ChurchCard;
