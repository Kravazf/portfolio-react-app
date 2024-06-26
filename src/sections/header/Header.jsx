import MyPhoto from '../../assets/myPhoto.jpg';
import data from './data';
import './header.css';

const Header = () => (
    <header id='header'>
      <div className='container header__container'>
        <div className='animation-wrap'>
          <h3 className='text1'>Hi, I&apos;m</h3>
          <h3 className='text2'>Maks Kravchenko</h3>
          <h3 className='text3'>Front-end Developer</h3>
        </div>
        <div className="about__me">
          <div className="header__profile">
            <img src={MyPhoto} alt='Header Portait'/>
          </div>
        </div>
        <p>
          You are a click away from babbling your dream website or web app.
          Send me the detalis of your project for a modern, mobile responsive, highly parformant website today!
        </p>
        <div className='header__cta'>
          <a href='#contact' className='btn primary'>
            let&apos;s Talk
          </a>
          <a href='#portfolio' className='btn light'>
            My Work
          </a>
        </div>
        <div className='header__socials'>
          {
            data.map((item) => <a
                key={item.id}
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.icon}
              </a>)}
        </div>
      </div>
    </header>
);

export default Header;
