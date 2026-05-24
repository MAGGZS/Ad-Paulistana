import { motion } from 'framer-motion';
import './LeadersCarousel.css';

const leaders = [
  { id: 1, name: 'Pr. José Silva',      role: 'Pastor Presidente',    photo: 'https://i.pravatar.cc/200?img=12' },
  { id: 2, name: 'Pra. Maria Santos',   role: 'Pastora Auxiliar',     photo: 'https://i.pravatar.cc/200?img=5'  },
  { id: 3, name: 'Pr. Carlos Oliveira', role: 'Pastor de Jovens',     photo: 'https://i.pravatar.cc/200?img=13' },
  { id: 4, name: 'Pra. Ana Costa',      role: 'Pastora de Mulheres',  photo: 'https://i.pravatar.cc/200?img=9'  },
  { id: 5, name: 'Pr. Paulo Ferreira',  role: 'Pastor de Evangelismo',photo: 'https://i.pravatar.cc/200?img=15' },
  { id: 6, name: 'Pra. Juliana Lima',   role: 'Pastora de Crianças',  photo: 'https://i.pravatar.cc/200?img=10' },
  { id: 7, name: 'Pr. Roberto Alves',   role: 'Pastor de Missões',    photo: 'https://i.pravatar.cc/200?img=14' },
  { id: 8, name: 'Pra. Fernanda Souza', role: 'Pastora de Louvor',    photo: 'https://i.pravatar.cc/200?img=20' },
];

const doubled = [...leaders, ...leaders];

const LeadersCarousel = () => (
  <section className="leaders-section">
    <div className="leaders-header">
      <p className="leaders-eyebrow">Liderança</p>
      <h2>Nossa Equipe Pastoral</h2>
    </div>

    <div className="leaders-track-wrapper">
      <div className="leaders-fade leaders-fade-left" />
      <div className="leaders-fade leaders-fade-right" />

      <motion.div
        className="leaders-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((l, i) => (
          <div key={i} className="leader-item">
            <div className="leader-avatar">
              <img src={l.photo} alt={l.name} />
            </div>
            <span className="leader-name">{l.name}</span>
            <span className="leader-role">{l.role}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default LeadersCarousel;
