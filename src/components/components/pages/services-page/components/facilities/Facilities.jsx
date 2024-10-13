import Heading3 from 'components/components/common/components/Heading3';
import { Container, Section } from './Facilities.styles';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/item/Item';
import Photo from 'components/components/common/components/photo/Photo';
import bathroom from './images/bathroom-3.jpg';

const Facilities = () => (
  <Section>
    <Container>
      <Heading3>Facilitati</Heading3>
      <List>
        <Item>medic generalist (1 -2 vizite/sapatamana);</Item>
        <Item>psiholog (2 vizite/ luna);</Item>
        <Item>medic psihiatru ( 2 vizite/luna);</Item>
        <Item>medic neurolog ( 1 vizita/luna);</Item>
        <Item>medic cardiolog ( 1 vizita/luna);</Item>
        <Item>medic reumatolog (1 vizita/luna);</Item>
        <Item>personal specializat si monitorizare 24 de ore/zi;</Item>
        <Item>kinetoterapeut;</Item>
        <Item>asistent social;</Item>
        <Item>supraveghere video in spatiile comune;</Item>
        <Item>cladire renovata recent;</Item>
      </List>
    </Container>
    <Photo src={bathroom} alt="baie" />
  </Section>
);

export default Facilities;
