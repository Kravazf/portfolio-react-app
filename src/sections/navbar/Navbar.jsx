import { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import data from './data';
import './navbar.css';
import BtnDarkMode from '../../components/btnDarkMode/BtnDarkMode';

const Navbar = () => {
  const [activeNav, setActivNav] = useState('#');

  const isMobile = useMediaQuery('(max-width: 1024px)');
  const renderContent = (item) => {
    return isMobile ? item.icon : item.title;
  };

  const handleClick = (link) => {
    setActivNav(link);
  };

  return (
    <nav>
      <div className="container nav__container">
        <a href='index.html' className='nav__logo' >
          WUYP
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => 
              <li key={item.id}>
                <a href={item.link} className={activeNav === item.link ? 'active' : ''} onClick={() => handleClick(item.link)}>
                  {renderContent(item)}
                </a>
              </li>
          )}
        </ul>
        <BtnDarkMode />
      </div>
    </nav>
  )
}

export default Navbar;
