import Heading2 from 'components/components/common/components/Heading2';
import { Container, Section, Text } from './Advatages.styles';
import Paragraph from 'components/components/common/components/Paragraph';
import Photo from 'components/components/common/components/photo/Photo';
import garden from '../../../../common/images/garden-2.jpg';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/item/Item';
import PropTypes from 'prop-types';

const Advantages = ({ onClick }) => (
  <Section>
    <Heading2>Avantajele noastre</Heading2>
    <Text>
      <List>
        <Item>locație ușor accesibilă, cu metroul sau RATB;</Item>
        <Item>personal calificat și specializat;</Item>
        <Item>clădire moderna, renovată recent;</Item>
        <Item>prețuri competitive și atractive;</Item>
      </List>
      <Container>
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
      </Container>
    </Text>
    <Photo id={3} src={garden} alt="gradina" onClick={onClick} />
  </Section>
);

Advantages.propType = {
  onClick: PropTypes.func,
};

export default Advantages;
