import { Main } from './App.styles';
import NavBar from './components/nav-bar/NavBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Spaces from './components/spaces/Spaces';
import Space from './components/spaces/components/space/Space';
import GardenImg from './images/retirement-home-garden.jpg';
import LivingImg from './images/retirement-home-living.jpg';
import BedroomImg from './images/retirement-home-bedroom.jpg';
import BathroomImg from './images/retirement-home-bathroom.jpg';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import { Divider } from '@mui/material';

export const App = () => {
  return (
    <Main>
      <NavBar />
      <Hero />
      <About />
      <Divider
        sx={{
          width: '40%',
          position: 'absolute',
          left: '30%',
          borderColor: '#ff1694',
        }}
      />
      <Spaces>
        <Space
          title="gradina"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing 
          elit. Iste perspiciatis recusandae illum vel cum quisquam aliquid 
          debitis ipsam eius omnis molestias dignissimos commodi, eligendi 
          corporis odit sequi ipsum nemo pariatur. Quas reiciendis dicta 
          asperiores maiores cupiditate accusantium ab corrupti eos!"
          image={GardenImg}
        />
        <Divider
          sx={{
            width: '40%',
            position: 'absolute',
            left: '30%',
            borderColor: '#ff1694',
          }}
        />
        <Space
          title="living"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing 
          elit. Sequi dolor explicabo et libero dignissimos laudantium eveniet 
          iste expedita. Vero repellat temporibus eveniet a quidem. Veritatis 
          at rerum odio soluta, voluptatibus corrupti dicta sequi optio 
          blanditiis quasi odit consectetur suscipit ut!"
          image={LivingImg}
        />
        <Divider
          sx={{
            width: '40%',
            position: 'absolute',
            left: '30%',
            borderColor: '#ff1694',
          }}
        />
        <Space
          title="dormitor"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit. Quia accusamus reprehenderit ex dolore tempore inventore? 
          Ab ullam fuga atque assumenda reprehenderit nesciunt pariatur, 
          perspiciatis necessitatibus inventore tempore ea ducimus magni 
          eum, ratione odio mollitia repellendus optio! Delectus rerum 
          similique optio."
          image={BedroomImg}
        />
        <Divider
          sx={{
            width: '40%',
            position: 'absolute',
            left: '30%',
            borderColor: '#ff1694',
          }}
        />
        <Space
          title="baie"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing 
          elit. Reprehenderit mollitia saepe at facilis incidunt fugiat commodi 
          laboriosam explicabo ipsam dolor repellat quaerat ab natus ut, 
          praesentium magnam quis voluptas assumenda officiis id odio 
          dolorum beatae dolorem. Debitis mollitia explicabo nulla?"
          image={BathroomImg}
        />
      </Spaces>
      <Divider
        sx={{
          width: '40%',
          position: 'absolute',
          left: '30%',
          borderColor: '#ff1694',
        }}
      />
      <Services />
      <Divider
        sx={{
          width: '40%',
          position: 'absolute',
          left: '30%',
          borderColor: '#ff1694',
        }}
      />
      <Contact />
    </Main>
  );
};
