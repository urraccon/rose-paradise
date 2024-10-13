import Heading1 from 'components/components/common/components/Heading1';
import Photo from 'components/components/common/components/photo/Photo';
import kitchen from './images/kitchen-3.jpg';
import Paragraph from 'components/components/common/components/Paragraph';
import Heading3 from 'components/components/common/components/Heading3';
import {
  Container,
  Introduction,
  Section,
  ServicesContainer,
} from './Services.styles';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/item/Item';
import ContactBanner from 'components/components/common/components/contact-banner/ContactBanner';

const Services = () => (
  <Section>
    <Container>
      <Heading1>Servicii si Facilitati</Heading1>
      <Introduction>
        <Photo src={kitchen} alt="bucatarie" />
        <Paragraph>
          Serviciile noastre includ cazare si masa, asigurarea igienei
          personale, servicii medicale si de supraveghere, asigurarea
          medicamentelor si exercitii de recuperare. Personalul specializat din
          cadrul caminului de batrani Resedinta Bunicilor incearca sa ofere
          fiecarui rezident o experienta cat mai placuta, indiferent de nevoi
          sau varsta.
        </Paragraph>
      </Introduction>
      <Heading3>Serviciile Caminului de Batrani</Heading3>
      <ServicesContainer>
        <Paragraph>
          Resedinta Bunicilor ofera cazare si servicii specificie persoanelor
          varstnice, cu si fără probleme de sănătate, persoanelor cu boli
          cronice sau celor care au nevoie de o perioadă de recuperare sau
          tratament.
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
      </ServicesContainer>
    </Container>
    <ContactBanner />
  </Section>
);

export default Services;
