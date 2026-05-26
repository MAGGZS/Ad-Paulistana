import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">

      <div className="footer-brand">
        <span className="footer-logo-main">Assembleia de Deus</span>
        <span className="footer-logo-badge">Paulistana</span>
        <p className="footer-tagline">
          Fé, comunidade e propósito em Jandira — SP.
        </p>
      </div>

      <div className="footer-links">
        <p className="footer-col-title">Navegação</p>
        <a href="#igreja">Igreja</a>
        <a href="#cultos">Cultos</a>
        <a href="#oracoes">Orações</a>
      </div>

      <div className="footer-contact">
        <p className="footer-col-title">Contato</p>
        <span>(11) 96370-3656</span>
        <span>contato@adpaulistana.org.br</span>
        <span>Jandira — SP</span>
      </div>

    </div>

    <div className="footer-bottom">
      <span>© 2024 Assembleia de Deus Paulistana</span>
    </div>
  </footer>
);

export default Footer;
