import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import banner from './assets/banner.svg';
import { Link } from 'react-router-dom';
import { partners, services } from '../moc.json';
import { Slider } from './components/utis/Slider/Slider';
import { Title } from './ui/Title';
import { ServicesComponent } from './components/ServicesComponent/ServicesComponent';

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
       <Slider partners={partners}/>
       <ServicesComponent items={services}>
          
       </ServicesComponent>
       
      </main>
    </div>
  );
}

export default App;
