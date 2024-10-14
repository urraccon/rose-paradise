import { Container, Section } from './Hero.styles';
import ServicesButton from 'components/components/common/components/ServicesButton';
import { Typography } from '@mui/material';

const titleStyle = {
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 500,
  textAlign: 'center',
  lineHeight: '20px',
  paddingBottom: '10px',
  fontSize: '20px',
};

const Hero = () => (
  <Section>
    <Container>
      <Typography variant="h2" sx={titleStyle}>
        serviciile caminului de batrani
      </Typography>
      <ServicesButton>Vezi detalii</ServicesButton>
    </Container>
  </Section>
);

export default Hero;
