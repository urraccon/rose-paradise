import { Container, FooterStyled } from './Footer.styles';
import { Typography } from '@mui/material';

const textStyle = {
  color: 'white',
  lineHeight: '25.5px',
  fontSize: '15.5px',
};

const titleStyle = {
  color: 'white',
  fontWeight: 600,
  textTransform: 'uppercase',
  lineHeight: '25.5px',
  fontSize: '15.5px',
};

const Footer = () => (
  <FooterStyled>
    <Container>
      <Typography variant="body1" sx={titleStyle}>
        Locatie:
      </Typography>
      <Typography variant="body1" sx={textStyle}>
        Caminul de batrani este localizat in Militari, zona Gorjului, aproape de
        statia de metrou
      </Typography>
    </Container>
    <Container>
      <Typography variant="body1" sx={titleStyle}>
        Contact:
      </Typography>
      <Typography variant="body1" sx={textStyle}>
        Strada Partiturii nr. 11, Sector 6, Bucuresti Telefoane: 0740.353.333,
        0748.660.000
      </Typography>
    </Container>
  </FooterStyled>
);

export default Footer;
