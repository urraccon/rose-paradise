import Heading2 from 'components/components/common/components/Heading2';
import { Section, Text } from './Advatages.styles';
import Paragraph from 'components/components/common/components/Paragraph';
import Photo from 'components/components/common/components/photo/Photo';
import garden from './images/garden-3.jpg';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/item/Item';

const Advantages = () => (
  <Section>
    <Heading2>Avantajele noastre</Heading2>
    <Text>
      <List>
        <Item>locație ușor accesibilă, cu metroul sau RATB;</Item>
        <Item>personal calificat și specializat;</Item>
        <Item>clădire moderna, renovată recent;</Item>
        <Item>prețuri competitive și atractive;</Item>
      </List>
      <Paragraph>
        Reședința Bunicilor oferă cazare și servicii specifice persoanelor
        varstnice, cu și fără probleme de sănătate, persoanelor cu boli cronice
        sau celor care au nevoie de o perioadă de recuperare sau tratament.
      </Paragraph>
      <Paragraph>
        Oferim servicii de monitorizare pentru bolnavii de Alzheimer sau
        Parkinson, personalul din Reședința Bunicilor fiind la curent cu
        riscurile și manifestările acestor boli.
      </Paragraph>
    </Text>
    <Photo src={garden} alt="gradina" />
  </Section>
);

export default Advantages;
