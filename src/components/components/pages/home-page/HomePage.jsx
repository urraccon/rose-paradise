import FsLightbox from 'fslightbox-react';
import AboutUs from './components/about-us/AboutUs';
import Advantages from './components/advantages/Advantages';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import { Container, Main } from './HomePage.styles';
import { useState } from 'react';
import diningRoom from '../../common/images/dining-room.jpg';
import bedroomThreeBeds from '../../common/images/bedroom-three-beds-4.jpg';
import garden from '../../common/images/garden-2.jpg';

const HomePage = () => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const handleClick = evt => {
    setToggler(!toggler);
    setSlide(evt.target.id);
  };

  return (
    <Main>
      <Hero />
      <Container>
        <AboutUs onClick={handleClick} />
        <Advantages onClick={handleClick} />
      </Container>
      <Services />
      <FsLightbox
        toggler={toggler}
        sources={[diningRoom, bedroomThreeBeds, garden]}
        slide={slide}
      />
    </Main>
  );
};

export default HomePage;
