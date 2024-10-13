import Paragraph from 'components/components/common/components/Paragraph';
import Heading3 from 'components/components/common/components/Heading3';
import { Section, Container } from './Services.styles';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/item/Item';

const Services = () => (
  <Section>
    <Heading3>Serviciile Caminului de Batrani</Heading3>
    <Container>
      <Paragraph>
        Resedinta Bunicilor ofera cazare si servicii specificie persoanelor
        varstnice, cu si fără probleme de sănătate, persoanelor cu boli cronice
        sau celor care au nevoie de o perioadă de recuperare sau tratament.
      </Paragraph>
      <List>
        <Item>cazare pe perioada nedeterminata sau pe perioade scurte;</Item>
        <Item>
          trei mese pe zi + 2 gustari: mic dejun, gustare, pranz, gustare si
          cina;
        </Item>
        <Item>
          ingrijire si asistenta medicala asigurata de personal calificat;
        </Item>
        <Item>
          supravegherea rezidentilor pentru urmarea corecta a tratamentelor
          medicale recomandate de doctori;
        </Item>
        <Item>curatenie si intretinere generala a spatiului locuit;</Item>
        <Item>cosmetica, ingrijire si igiena personala;</Item>
        <Item>
          organizare de evenimente si serbari, zile de nastere, sarbatori;
        </Item>
        <Item>activitati zilnice sociale prin implicarea personalului;</Item>
        <Item>
          monitorizare speciala pentru bolnavii de Alzheimer si Parkinson;
        </Item>
        <Item>Terapie ocupationala/ergoterapie, gimnastica;</Item>
        <Item>Iesiri la teatru, opera, spectacole;</Item>
      </List>
    </Container>
  </Section>
);

export default Services;
