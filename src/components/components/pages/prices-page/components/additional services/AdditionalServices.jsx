import Heading3 from 'components/components/common/components/Heading3';
import { Container, Section } from './AdditionalServices.styles';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/item/Item';
import Photo from 'components/components/common/components/photo/Photo';
import bathroom from './images/bathroom-3.jpg';

const AdditionalServices = () => (
  <Section>
    <Heading3>Servicii Suplimentare:</Heading3>
    <Container>
      <List>
        <Item>monitorizare specializata pentru diverse boli;</Item>
        <Item>psihoterapie individuala;</Item>
        <Item>consult medical de specialitate;</Item>
        <Item>recuperare medicala – la recomandarea specialistului;</Item>
        <Item>manechiura/pedichiura;</Item>
        <Item>servicii religioase;</Item>
        <Item>alte servicii la solicitarea fiecarui rezident;</Item>
      </List>
      <Photo src={bathroom} alt="baie" />
    </Container>
  </Section>
);

export default AdditionalServices;
