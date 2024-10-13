import { Container, Section } from './Hero.styles';
import ServicesButton from 'components/components/common/components/ServicesButton';
import Title1 from 'components/components/common/components/Title1';

const titleStyle = {
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 500,
  textAlign: 'center',
  lineHeight: '20px',
};

const Hero = () => {
  return (
    <Section>
      <Container>
        <Title1 style={titleStyle}>serviciile caminului de batrani</Title1>
        <ServicesButton>Vezi detalii</ServicesButton>
      </Container>
    </Section>
  );
};

export default Hero;
