import useScrollReveal from '../hooks/useScrollReveal';
import './Reveal.css';

const Reveal = ({ children, direction = 'up', delay = 0, threshold = 0.15 }) => {
  const { ref, visible } = useScrollReveal(threshold);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
