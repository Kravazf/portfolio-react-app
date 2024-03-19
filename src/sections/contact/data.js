import {
  FaTelegram,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

const data = [
  {
    id: 1,
    title: 'Telegram',
    desc: '@MaxKravchenkoZf',
    icon: <FaTelegram />,
    link: 'https://t.me/MaxKravchenkoZf',
  },
  {
    id: 2,
    title: 'WhatsApp',
    desc: '+380954620919',
    icon: <FaWhatsappSquare />,
    link: 'https://api.whatsapp.com/send?phone=+380954620919',
  },
  {
    id: 3,
    title: 'Email',
    desc: 'krava.zf@gmail.com',
    icon: <MdOutlineMailOutline />,
    link: 'mailto:krava.zf@gmail.com',
  },
];

export default data;
