import { useRef } from 'react';
import emailjs from 'emailjs-com';
import data from './data';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_exkec8s', 'template_jtdad2y', form.current, 'DmnAbrgHbB5ptyX1M');
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {
            data.map((item) => (
              <article key={item.id} className='contact__option'>
                <div className='contact__option-icon'>
                  {item.icon}
                </div>
                <h4>
                  {item.title}
                </h4>
                <h5>
                  {item.desc}
                </h5>
                <a target='_blank' rel='noreferrer' href={item.link}>
                  Send a message
                </a>
              </article>
            ))
          }
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" autoComplete="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" autoComplete="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" autoComplete="message" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
