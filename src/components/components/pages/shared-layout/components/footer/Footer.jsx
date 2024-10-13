import Paragraph from 'components/components/common/components/Paragraph';
import { Container, FooterStyled } from './Footer.styles';

const textStyle = {
  color: 'white',
  lineHeight: '23.8px',
};

const titleStyle = {
  color: 'white',
  fontWeight: 600,
  textTransform: 'uppercase',
  lineHeight: '25.5px',
};

const Footer = () => (
  <FooterStyled>
    <Container>
      <Paragraph style={titleStyle}>Locatie:</Paragraph>
      <Paragraph style={textStyle}>
        Caminul de batrani este localizat in Militari, zona Gorjului, aproape de
        statia de metrou
      </Paragraph>
    </Container>
    <Container>
      <Paragraph style={titleStyle}>Contact:</Paragraph>
      <Paragraph style={textStyle}>
        Strada Partiturii nr. 11, Sector 6, Bucuresti Telefoane: 0740.353.333,
        0748.660.000
      </Paragraph>
    </Container>
  </FooterStyled>
);

export default Footer;
