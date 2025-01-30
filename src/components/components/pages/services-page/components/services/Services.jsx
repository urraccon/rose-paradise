import Paragraph from 'components/components/common/components/Paragraph';
import Heading3 from 'components/components/common/components/Heading3';
import { Section, Container } from './Services.styles';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/list/item/Item';

const Services = () => (
  <Section>
    <Heading3>Serviciile Caminului de Batrani</Heading3>
    <Container>
      <Paragraph>
        Serviciile noastre sunt concepute pentru a oferi o îngrijire completă,
        incluzând atât asistență medicală, cât și sprijin emoțional, pentru a
        răspunde nevoilor individuale ale rezidenților. Fiecare persoană
        beneficiază de îngrijire personalizată, adaptată stării sale de sănătate
        și preferințelor.
      </Paragraph>
      <List>
        <Item>îngrijire medicală continuă;</Item>
        <Item>monitorizarea stării de sănătate;</Item>
        <Item>administrarea tratamentelor prescrise;</Item>
        <Item>supraveghere constantă 24/7;</Item>
        <Item>asistență în activitățile zilnice;</Item>
        <Item>sprijin în mobilitate;</Item>
        <Item>consiliere psihologică și sprijin emoțional;</Item>
        <Item>consult medical periodic;</Item>
        <Item>servicii de igienă personală;</Item>
        <Item>suport în alimentație și diete personalizate;</Item>
      </List>
    </Container>
  </Section>
);

export default Services;
