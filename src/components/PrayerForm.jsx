import { motion } from 'framer-motion';
import { useState } from 'react';
import './PrayerForm.css';

const PrayerForm = () => {
  const [form, setForm] = useState({ name: '', prayer: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', prayer: '' }); }, 4000);
  };

  return (
    <section id="oracoes" className="prayer-section">
      <div className="prayer-inner">

        <div className="prayer-left">
          <p className="prayer-eyebrow">Intercessão</p>
          <h2>Pedidos de<br />Oração</h2>
          <div className="prayer-divider" />
          <p className="prayer-quote">
            “Não andeis ansiosos de coisa alguma; em tudo sejam conhecidas
            diante de Deus as vossas petições, pela oração e pela súplica,
            com ações de graças.”
          </p>
          <span className="prayer-ref">Filipenses 4:6</span>
        </div>

        <div className="prayer-right">
          {sent ? (
            <motion.div
              className="prayer-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="success-check">✓</div>
              <h3>Pedido Enviado</h3>
              <p>Estaremos orando por você.</p>
            </motion.div>
          ) : (
            <form className="prayer-form" onSubmit={handleSubmit}>
              <div className="field">
                <label>Nome <span>(opcional)</span></label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
               <div className="field">
                <label>Telefone<span>(opcional)</span></label>
                <input
                  type="text"
                  placeholder="Informe o seu telefone..."
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="field">
                <label>Pedido de Oração</label>
                <textarea
                  rows={6}
                  placeholder="Compartilhe seu pedido..."
                  value={form.prayer}
                  onChange={e => setForm({ ...form, prayer: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="prayer-btn">Enviar Pedido</button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default PrayerForm;
