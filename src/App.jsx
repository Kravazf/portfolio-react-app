import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Experiance from './sections/experiance/Experiance';
import Portfolio from './sections/portfolio/Portfolio';
// import Testimonials from './sections/testimonials/Testimonials';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Experiance />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
};

export default App;
