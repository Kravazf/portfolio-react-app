import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xj94rmq', 'template_8l8irze', form.current, 'Fg9cl1upJEhz5bV0t',)
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>krava.zf@gmail.com</h5>
            <a
              href='mailto:krava.zf@gmail.com'
              target='_blank'
              rel='noreferrer'
              >
                Send a message
            </a>
          </article>
          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+380954620919</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+380954620919'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <FaTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@MaxKravchenkoZf</h5>
            <a
              href='https://t.me/MaxKravchenkoZf'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
