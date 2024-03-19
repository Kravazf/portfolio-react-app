import { AiOutlineHome } from 'react-icons/ai';
import {
  FaUserAstronaut,
  FaBriefcase,
} from 'react-icons/fa';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const data = [
  {
    id: 1,
    link: '#',
    title: 'Home',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    link: '#about',
    title: 'About',
    icon: <FaUserAstronaut />,
  },
  {
    id: 3,
    link: '#experiance',
    title: 'Experiance',
    icon: <RiServiceLine />,
  },
  {
    id: 4,
    link: '#portfolio',
    title: 'Portfolio',
    icon: <FaBriefcase />,
  },
  {
    id: 5,
    link: '#contact',
    title: 'Contact',
    icon: <BiMessageSquareDetail />,
  },
];

export default data;
