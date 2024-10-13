import Title1 from 'components/components/common/components/Title1';
import {
  Container,
  Image,
  Item,
  List,
  Section,
  Text,
} from './Advatages.styles';
import Paragraph from 'components/components/common/components/Paragraph';
import Photo from 'components/components/common/components/photo/Photo';
import garden from './images/garden-3.jpg';

const Advantages = () => {
  return (
    <Section>
      <Container>
        <Title1>Avantajele noastre</Title1>
        <Text>
          <List>
            <Item>locație ușor accesibilă, cu metroul sau RATB;</Item>
            <Item>personal calificat și specializat;</Item>
            <Item>clădire moderna, renovată recent;</Item>
            <Item>prețuri competitive și atractive;</Item>
          </List>
          <Paragraph>
            Reședința Bunicilor oferă cazare și servicii specifice persoanelor
            varstnice, cu și fără probleme de sănătate, persoanelor cu boli
            cronice sau celor care au nevoie de o perioadă de recuperare sau
            tratament.
          </Paragraph>
          <Paragraph>
            Oferim servicii de monitorizare pentru bolnavii de Alzheimer sau
            Parkinson, personalul din Reședința Bunicilor fiind la curent cu
            riscurile și manifestările acestor boli.
          </Paragraph>
        </Text>
        <Image>
          <Photo src={garden} alt="garden" />
        </Image>
      </Container>
    </Section>
  );
};

export default Advantages;
