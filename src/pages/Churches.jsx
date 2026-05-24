import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChurchCard from '../components/ChurchCard';
import './Churches.css';

const Churches = () => {
  const [filter, setFilter] = useState('all');

  const churches = [
    {
      id: 1,
      name: 'AD Paulistana - Centro',
      address: 'Rua da Consolação, 1000 - Centro, São Paulo',
      schedule: 'Dom: 9h, 18h | Qua: 19h30',
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400',
      region: 'centro'
    },
    {
      id: 2,
      name: 'AD Paulistana - Zona Leste',
      address: 'Av. Aricanduva, 5555 - Aricanduva, São Paulo',
      schedule: 'Dom: 10h, 19h | Ter: 19h30',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400',
      region: 'leste'
    },
    {
      id: 3,
      name: 'AD Paulistana - Zona Sul',
      address: 'Av. Interlagos, 3000 - Interlagos, São Paulo',
      schedule: 'Dom: 9h, 18h | Qui: 20h',
      image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=400',
      region: 'sul'
    },
    {
      id: 4,
      name: 'AD Paulistana - Zona Norte',
      address: 'Av. Inajar de Souza, 2500 - Freguesia do Ó, São Paulo',
      schedule: 'Dom: 10h, 19h | Sex: 19h30',
      image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?w=400',
      region: 'norte'
    },
    {
      id: 5,
      name: 'AD Paulistana - Zona Oeste',
      address: 'Av. Francisco Matarazzo, 1500 - Água Branca, São Paulo',
      schedule: 'Dom: 9h, 18h | Qua: 19h30',
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400',
      region: 'oeste'
    },
    {
      id: 6,
      name: 'AD Paulistana - ABC',
      address: 'Av. Industrial, 1000 - Santo André, SP',
      schedule: 'Dom: 10h, 19h | Qui: 19h30',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400',
      region: 'abc'
    }
  ];

  const filteredChurches = filter === 'all' 
    ? churches 
    : churches.filter(church => church.region === filter);

  return (
    <div className="churches-page">
      <Navbar />
      
      <section className="churches-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="churches-hero-content"
        >
          <h1>Nossas Igrejas</h1>
          <p>Encontre a igreja mais próxima de você em todo o estado de São Paulo</p>
        </motion.div>
      </section>

      <section className="churches-content">
        <div className="churches-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="filter-section"
          >
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Todas
            </button>
            <button 
              className={`filter-btn ${filter === 'centro' ? 'active' : ''}`}
              onClick={() => setFilter('centro')}
            >
              Centro
            </button>
            <button 
              className={`filter-btn ${filter === 'leste' ? 'active' : ''}`}
              onClick={() => setFilter('leste')}
            >
              Zona Leste
            </button>
            <button 
              className={`filter-btn ${filter === 'sul' ? 'active' : ''}`}
              onClick={() => setFilter('sul')}
            >
              Zona Sul
            </button>
            <button 
              className={`filter-btn ${filter === 'norte' ? 'active' : ''}`}
              onClick={() => setFilter('norte')}
            >
              Zona Norte
            </button>
            <button 
              className={`filter-btn ${filter === 'oeste' ? 'active' : ''}`}
              onClick={() => setFilter('oeste')}
            >
              Zona Oeste
            </button>
            <button 
              className={`filter-btn ${filter === 'abc' ? 'active' : ''}`}
              onClick={() => setFilter('abc')}
            >
              ABC
            </button>
          </motion.div>

          <div className="churches-grid">
            {filteredChurches.map((church, index) => (
              <ChurchCard key={church.id} church={church} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Churches;
