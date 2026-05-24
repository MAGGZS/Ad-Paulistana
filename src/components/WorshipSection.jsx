import { motion } from 'framer-motion';
import './WorshipSection.css';

const worships = [
  { id: 1, title: 'Culto da Família',  day: 'Domingo',              time: '9h e 18h30', desc: 'Culto especial para toda a família, com mensagens edificantes e louvor.' },
  { id: 2, title: 'Culto Jovem',       day: 'Sábado',               time: '19h',        desc: 'Encontro especial para jovens com adoração contemporânea e palavra.' },
  { id: 3, title: 'Escola Bíblica',    day: 'Domingo',              time: '9h',         desc: 'Estudo aprofundado da Palavra de Deus para todas as idades.' },
  { id: 4, title: 'Vigília de Oração', day: 'Última Sexta do Mês',  time: '23h',        desc: 'Noite de oração, adoração e busca pela presença de Deus.' },
];

const WorshipSection = () => (
  <section id="cultos" className="worship-section">
    <div className="worship-inner">

      <div className="worship-header">
        <p className="worship-eyebrow">Programação</p>
        <h2>Nossos Cultos</h2>
        <p className="worship-desc">Participe dos nossos encontros e fortaleça sua fé</p>
      </div>

      <div className="worship-grid">
        {worships.map((w, i) => (
          <motion.div
            key={w.id}
            className="worship-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="worship-card-top">
              <span className="worship-day">{w.day}</span>
              <span className="worship-time">{w.time}</span>
            </div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default WorshipSection;
