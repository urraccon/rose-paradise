import { Container, Section } from './Hero.styles';
import ServicesButton from 'components/components/common/components/ServicesButton';
import Heading2 from 'components/components/common/components/Heading2';

const titleStyle = {
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 500,
  textAlign: 'center',
  lineHeight: '20px',
};

const Hero = () => (
  <Section>
    <Container>
      <Heading2 style={titleStyle}>serviciile caminului de batrani</Heading2>
      <ServicesButton>Vezi detalii</ServicesButton>
    </Container>
  </Section>
);

export default Hero;
