import AboutUs from './components/about-us/AboutUs';
import Advantages from './components/advantages/Advantages';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import { Container, Main } from './HomePage.styles';

const HomePage = () => (
  <Main>
    <Hero />
    <Container>
      <AboutUs />
      <Advantages />
    </Container>
    <Services />
  </Main>
);

export default HomePage;
