import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './TestimonialCarousel.css';

const testimonials = [
  { id: 1, name: 'Maria Silva',    photo: 'https://i.pravatar.cc/150?img=1',  text: 'Encontrei paz e propósito aqui. A comunidade é acolhedora e as mensagens transformam vidas.' },
  { id: 2, name: 'João Santos',    photo: 'https://i.pravatar.cc/150?img=12', text: 'Minha família foi restaurada através das orações e do apoio desta igreja. Somos muito gratos.' },
  { id: 3, name: 'Ana Costa',      photo: 'https://i.pravatar.cc/150?img=5',  text: 'Os cultos são edificantes e cheios da presença de Deus. Aqui cresci espiritualmente.' },
  { id: 4, name: 'Pedro Oliveira', photo: 'https://i.pravatar.cc/150?img=13', text: 'A palavra pregada aqui mudou minha vida completamente. Sou grato por cada ensinamento.' },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-inner">

        <div className="testimonial-header">
          <p className="testimonial-eyebrow">Testemunhos</p>
          <h2>Vidas Transformadas</h2>
        </div>

        <div className="testimonial-body">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
            >
              <p className="testimonial-text">"{testimonials[current].text}"</p>
              <div className="testimonial-author">
                <img src={testimonials[current].photo} alt={testimonials[current].name} />
                <span>{testimonials[current].name}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`t-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;
