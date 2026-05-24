import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="notfound-content"
      >
        <div className="notfound-number">404</div>
        <h1>Página Não Encontrada</h1>
        <p>A página que você está procurando não existe ou foi movida.</p>
        <button 
          className="notfound-btn"
          onClick={() => navigate('/')}
        >
          Voltar para Home
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
