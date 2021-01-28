import React from "react"; 
import {Link} from 'react-router-dom';
import logoFb from "../resources/images/Facebook.svg";
import logoVk from "../resources/images/VK.svg";
import logoInst from "../resources/images/Instagram.svg";
import logoTwit from "../resources/images/Twitter.svg";

 function Footer() {
     return (
      <footer className="footer root__footer">
      <address className="footer__author">Студия инициатив «Гражданин поэт»</address>
      <ul className="footer__list">
        <li className="footer__list-item">
          <Link to='/' className="footer__link" href="#">
            <img className="footer__icon" src={logoInst} alt="Instagram"/>
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to='/' className="footer__link" href="#">
            <img className="footer__icon" src={logoVk} alt="ВКонтакте"/>
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to='/' className="footer__link" href="#">
            <img className="footer__icon" src={logoFb} alt="Facebook"/>
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to='/' className="footer__link" href="#">
            <img className="footer__icon" src={logoTwit} alt="Twitter"/>
          </Link>
        </li>
      </ul>
    </footer>
     )
 }
 
 export default Footer;