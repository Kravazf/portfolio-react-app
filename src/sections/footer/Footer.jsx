import {AiOutlineInstagram} from 'react-icons/ai';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <footer>
        <a href='#' className='footer__logo'>
          Web Universe in Your Palm
        </a>
        <ul className='permalinks'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experiance'>Experiance</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href='https://www.linkedin.com/in/kravazf'>
            <FaLinkedin />
          </a>
          <a href='https://www.facebook.com/?locale=uk_UA'>
            <FaFacebook />
          </a>
          <a href='https://www.instagram.com/maxkrav4enko/'>
            <AiOutlineInstagram />
          </a>
        </div>
        <div className='footer__copyright'>
          <small>&copy; All Rigst Reserved.</small>
        </div>
      </footer>
    </footer>
  )
}

export default Footer;
