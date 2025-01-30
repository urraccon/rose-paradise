import { ContactInfo, Container, FooterStyled } from './Footer.styles';
import { Typography } from '@mui/material';

const textStyle = {
  color: 'white',
  lineHeight: '23.8px',
  fontSize: '14px',
};

const titleStyle = {
  color: 'white',
  fontWeight: 700,
  textTransform: 'uppercase',
  lineHeight: '23.8px',
  fontSize: '14px',
};

const Footer = () => (
  <FooterStyled>
    <Container>
      <ContactInfo>
        <Typography variant="body1" sx={titleStyle}>
          Locatie:
        </Typography>
        <Typography variant="body1" sx={textStyle}>
          Căminul se află în comuna Glina, aproape de stația „Cămin Cultural”
          (linia 405), care asigură legătura cu stația de metrou „Nicolae Teclu”
          (M3).
        </Typography>
      </ContactInfo>
      <ContactInfo>
        <Typography variant="body1" sx={titleStyle}>
          Contact:
        </Typography>
        <Typography variant="body1" sx={textStyle}>
          Intr. Morii nr. 8A, comuna Glina, jud. Ilfov Telefon: 0744995974
        </Typography>
      </ContactInfo>
    </Container>
  </FooterStyled>
);

export default Footer;
