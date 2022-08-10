import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-contact">
          <h3 className="footer-contact-title">Contacto</h3>
          <p className="footer-contact-text">Teléfono: +54 9 11 5555-5555 </p>
          <p className="footer-contact-text">Dirección: Calle Falsa 123</p>
          <p className="footer-contact-text">
            Email: dulce-suegra@dulcesuegra.com.ar
          </p>
        </div>
        <div className="footer-copy">
          <p> &copy; Copyright 2022 - Ayelen Leclerc</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
