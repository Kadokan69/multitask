import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import banner from './assets/banner.svg';
import { Link } from 'react-router-dom';
import { services } from '../moc.json';
import { Slider } from './components/utis/Slider/Slider';
import { ServicesComponent } from './components/ServicesComponent/ServicesComponent';
import { CallToAction } from './components/CallToAction/CallToAction';
import { Case } from './components/Case/Case';
import { WorkingProcess } from './components/WorkingProcess/WorkingProcess';
import { Team } from './components/Team/Team';
import { Testimonials } from './components/Testimonials/Testimonials';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='page_wrapper'>
      <Header />
      <main>
        <Banner
          title='Navigating the digital landscape for success'
          description='Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.'
          images={banner}
          button={<Link to='#'>Book a consultation</Link>}
        />
        <Slider />
        <ServicesComponent items={services} link='#' />
        <CallToAction
          title='Let’s make things happen'
          description='Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.'
          button={<Link to='#'>Get your free proposal</Link>}
        />
        <Case />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
