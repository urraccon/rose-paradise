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
        Căminul se află în comuna Glina, aproape de stația „Cămin Cultural”
        (linia 405), care asigură legătura cu stația de metrou „Nicolae Teclu”
        (M3).
      </Typography>
    </Container>
    <Container>
      <Typography variant="body1" sx={titleStyle}>
        Contact:
      </Typography>
      <Typography variant="body1" sx={textStyle}>
        Intr. Morii nr. 8A, comuna Glina, jud. Ilfov Telefon: 0744995974
      </Typography>
    </Container>
  </FooterStyled>
);

export default Footer;
