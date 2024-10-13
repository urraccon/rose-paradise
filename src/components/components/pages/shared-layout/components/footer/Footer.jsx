import Paragraph from 'components/components/common/components/Paragraph';
import { Address, Contact, Container, FooterStyled } from './Footer.styles';

const textStyle = {
  color: 'white',
};

const titleStyle = {
  color: 'white',
  fontWeight: 600,
  textTransform: 'uppercase',
};

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Address>
          <Paragraph style={titleStyle}>Locatie:</Paragraph>
          <Paragraph style={textStyle}>
            Caminul de batrani este localizat in Militari, zona Gorjului,
            aproape de statia de metrou
          </Paragraph>
        </Address>
        <Contact>
          <Paragraph style={titleStyle}>Contact:</Paragraph>
          <Paragraph style={textStyle}>
            Strada Partiturii nr. 11, Sector 6, Bucuresti Telefoane:
            0740.353.333, 0748.660.000
          </Paragraph>
        </Contact>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
