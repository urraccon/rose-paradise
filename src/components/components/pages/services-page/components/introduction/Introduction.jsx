import { Container, Section } from './Introduction.styles';
import Heading1 from 'components/components/common/components/Heading1';
import Photo from 'components/components/common/components/photo/Photo';
import kitchen from './images/kitchen-3.jpg';
import Paragraph from 'components/components/common/components/Paragraph';

const Introduction = () => (
  <Section>
    <Heading1>Servicii si Facilitati</Heading1>
    <Container>
      <Photo src={kitchen} alt="bucatarie" />
      <Paragraph>
        Serviciile noastre includ cazare si masa, asigurarea igienei personale,
        servicii medicale si de supraveghere, asigurarea medicamentelor si
        exercitii de recuperare. Personalul specializat din cadrul caminului de
        batrani Resedinta Bunicilor incearca sa ofere fiecarui rezident o
        experienta cat mai placuta, indiferent de nevoi sau varsta.
      </Paragraph>
    </Container>
  </Section>
);

export default Introduction;
