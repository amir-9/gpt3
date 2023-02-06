import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer section__padding">
      <div className="footer__cta">
        <h3 className="footer__cta-header text-gradient">
          Do you want to step in to the future before others ?
        </h3>
        <button className="footer__cta-button">Request Early Access</button>
      </div>
      <div className="footer__content">
        <div className="footer__logo">
          <img className="footer__logo-image" src={logo} alt="logo " />
          <p className="footer__logo-address">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__links__col">
            <h4 className="footer__col-header">Links</h4>
            <ul className="footer__col-items">
              <li className="footer__col-item">Overons</li>
              <li className="footer__col-item">Social Media</li>
              <li className="footer__col-item">Counters</li>
              <li className="footer__col-item">Contact</li>
            </ul>
          </div>
          <div className="footer__links__col">
            <h4 className="footer__col-header">Company</h4>
            <ul className="footer__col-items">
              <li className="footer__col-item">Terms & Conditions</li>
              <li className="footer__col-item">Privacy Policy</li>
              <li className="footer__col-item">Contact</li>
            </ul>
          </div>
          <div className="footer__links__col">
            <h4 className="footer__col-header">Get in touch</h4>
            <ul className="footer__col-items">
              <li className="footer__col-item">
                Crechterwoord K12 182 DK Alknjkcb
              </li>
              <li className="footer__col-item">085-132567</li>
              <li className="footer__col-item">info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__cw">
        <p className="footer__cw-text">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
