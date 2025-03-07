import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import banner from './assets/banner.svg';
import { Link } from 'react-router-dom';
import { parrters } from '../moc.json';

//Временно
const style:React.CSSProperties = {
  filter: `invert(0%) sepia(4%) saturate(0%) hue-rotate(309deg) brightness(93%) contrast(107%)`
}

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
        {/* Перенести в отдельный компонент */}
        <ul>
          {parrters.map((item) => (
            <li key={item.id}>
              <p>{item.id}</p>
              <img src={item.img} alt={item.img} style={style} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
