import Heading1 from 'components/components/common/components/Heading1';
import { Container, Section, Text } from './Introduction.styles';
import Photo from 'components/components/common/components/photo/Photo';
import Paragraph from 'components/components/common/components/Paragraph';
import bedroomTwoBeds from '../../../../common/images/bedroom-two-beds.jpg';
import PropTypes from 'prop-types';

const Introduction = ({ onClick }) => (
  <Section>
    <Heading1>Preturi si beneficii</Heading1>
    <Container>
      <Photo
        id={1}
        src={bedroomTwoBeds}
        alt="dormitor cu 2 paturi"
        onClick={onClick}
      />
      <Text>
        <Paragraph>
          Prețurile practicate de Reședința Bunicilor sunt în concordanță cu
          nevoile fiecărui rezident. Fiecare oaspete este unic, centrul nostru
          urmând să asigure servicii personalizate, în funcție de vârsta și
          starea de sănatate a rezidentului.
        </Paragraph>
        <Paragraph>
          Pachetul de bază include cazarea, curățenia, 3 mese și gustări/zi,
          asistență și supraveghere 24 de ore, igiena personală și vizitele
          medicilor specialiști enumerați în fiecare pachet. Serviciile
          suplimentare sunt discutate cu fiecare pacient în parte, în funcție de
          nevoile specifice sau de starea de sănătate
        </Paragraph>
      </Text>
    </Container>
  </Section>
);

Introduction.propTypes = {
  onClick: PropTypes.func,
};

export default Introduction;
