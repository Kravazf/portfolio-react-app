import AboutImage from '../../assets/myPhoto.jpg';
import CV from '../../assets/cv-Maks-Kravchenko.pdf';
import {HiDownload} from 'react-icons/hi';
import Card from '../../components/card/Card';
import data from './data';
import './about.css';


const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="myPhoto" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'>
                    {item.icon}
                  </span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Building projects my clients love have always been my passion. Being in the web development industry for over 3 years, and serving more than 70 happy clients worldwide, I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Maks Kravchenko,   and I'm based in Kyiv, Ukraine.   I specialize in frontend web  development, holding a   Bachelor's degree in Computer   Science. My primary goal is to  establish your business presence   online effectively, providing   you with industry-standard  design and all the necessary   functionality for seamless  online operation. Feel free to   reach out today with the details  of your project, and let's get   started! Don't forget to check  out my resume below! Check out   my resume below!
          </p>
          <a href={CV} download className='btn primary'>
            Download CV
            <HiDownload />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About;
