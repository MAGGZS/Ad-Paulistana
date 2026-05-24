import { motion } from 'framer-motion';
import { useState } from 'react';
import ChurchCard from './ChurchCard';
import './ChurchSearch.css';

const ChurchSearch = () => {
  const [city, setCity] = useState('');

  const churches = [
    {
      id: 1,
      name: 'AD Paulistana - Centro',
      address: 'Rua da Consolação, 1000 - Centro, São Paulo',
      schedule: 'Dom: 9h, 18h | Qua: 19h30',
      image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400'
    },
    {
      id: 2,
      name: 'AD Paulistana - Zona Leste',
      address: 'Av. Aricanduva, 5555 - Aricanduva, São Paulo',
      schedule: 'Dom: 10h, 19h | Ter: 19h30',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400'
    },
    {
      id: 3,
      name: 'AD Paulistana - Zona Sul',
      address: 'Av. Interlagos, 3000 - Interlagos, São Paulo',
      schedule: 'Dom: 9h, 18h | Qui: 20h',
      image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=400'
    },
    {
      id: 4,
      name: 'AD Paulistana - Zona Norte',
      address: 'Av. Inajar de Souza, 2500 - Freguesia do Ó, São Paulo',
      schedule: 'Dom: 10h, 19h | Sex: 19h30',
      image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?w=400'
    }
  ];

  return (
    <section id="igrejas" className="church-search">
      <div className="church-search-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="search-header"
        >
          <h2>Encontre Sua Igreja</h2>
          <p>Digite o nome da sua cidade e descubra todas as igrejas da Assembleia de Deus Paulistana próximas a você</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="search-form"
        >
          <div style={{ position: 'relative', flex: 1 }}>
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Ex: São Paulo, Campinas, Santos..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="search-input"
              style={{ paddingLeft: '3.5rem' }}
            />
          </div>
          <button className="search-button">Buscar Igrejas</button>
        </motion.div>

        <div className="church-grid">
          {churches.map((church, index) => (
            <ChurchCard key={church.id} church={church} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchSearch;
