import { useEffect } from 'react';
import { BsSun } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';
import './btnDarkMode.css';

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    // Встановлюємо або видаляємо клас 'dark' для body в залежності від стану darkMode
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Функція для перемикання темного режиму
  const toggleDarkMode = () => {
    setDarkMode((currentValue) => (currentValue === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className={`dark-mode-btn ${darkMode === 'dark' ? 'dark-mode-btn__active' : ''}`} onClick={toggleDarkMode}>
      <BsSun className="dark-mode-btn__icon" />
      <FaMoon className="dark-mode-btn__icon moon" />
    </button>
  );
};

export default BtnDarkMode;
