import AboutUs from './components/about-us/AboutUs';
import Advantages from './components/advantages/Advantages';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import { Main } from './HomePage.styles';

const HomePage = () => (
  <Main>
    <Hero />
    <AboutUs />
    <Advantages />
    <Services />
  </Main>
);

export default HomePage;
