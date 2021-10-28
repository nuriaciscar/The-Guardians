import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__info">
          <p className="footer__title">Creators</p>
          <div className="footer__text">
            <p className="footer__text__name">Adrian Paoletti Rubia</p>
            <p className="footer__text__name">Irene Piccoli Rojo</p>
            <p className="footer__text__name">Núria Ciscar Garzón</p>
          </div>
        </div>

        <div className="footer__info">
          <p className="footer__text">
            Podem posar una mini frase explicant el projecte/chiste/ el que
            volgueu
          </p>
        </div>

        <div className="footer__info">
          <p className="footer__text">
            This webpage is using the api of The Guardian Newspaper.
          </p>
          <p className="footer__text">Hope you like it!</p>
        </div>
      </div>
      <div className="footer__copyright">
        © 2021 The Guardians ISDI CODERS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
