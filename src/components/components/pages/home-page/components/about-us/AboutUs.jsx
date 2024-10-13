import { Container, Image, Text, Section } from './AboutUs.style';
import diningRoom from './images/dining-room.jpg';
import bedroomThreeBeds from './images/bedroom-3-beds-4.jpg';
import Title1 from 'components/components/common/components/Title1';
import Paragraph from 'components/components/common/components/Paragraph';
import Photo from 'components/components/common/components/photo/Photo';

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Title1>Despre noi</Title1>
        <Text>
          <Paragraph>
            Căminul de bătrâni Reședința Bunicilor a luat naștere din nevoia de
            a oferi seniorilor o bătrânete cât mai ușoara si cât mai plăcută.
            Reședința Bunicilor este un cămin de batrâni privat situat în
            Sectorul 6, cartierul Militari din București, la doar câteva minute
            de stația de metrou Gorjului. Oferim condiții moderne si personal
            calificat pentru o viața liniștită și lipsită de griji.
          </Paragraph>
          <Paragraph>
            Reședința Bunicilor nu este doar un cămin de batrâni, este o
            comunitate în care rezidenții formeaza o adevarata familie.
            Socializarea este un factor important în viața seniorilor, iar
            batrânețea este mult mai placuta în momentele în care este
            împărtășită cu oameni de aceeași vârstă.
          </Paragraph>
          <Paragraph>
            Serviciile noastre includ cazare și masă, asigurarea igienei
            personale, servicii medicale si de supraveghere, asigurarea
            medicamentelor și exerciții de recuperare.
          </Paragraph>
        </Text>
        <Image>
          <Photo src={diningRoom} alt="dining room" />
          <Photo src={bedroomThreeBeds} alt="bedroom with 3 beds" />
        </Image>
      </Container>
    </Section>
  );
};

export default AboutUs;
