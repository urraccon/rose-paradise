import Heading3 from 'components/components/common/components/Heading3';
import { Section } from './Facilities.styles';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/item/Item';
import Photo from 'components/components/common/components/photo/Photo';
import medicalOffice from '../../../../common/images/medical-office.jpg';
import PropTypes from 'prop-types';

const Facilities = ({ onClick }) => (
  <Section>
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
    <Photo id={2} src={medicalOffice} alt="cabinet medical" onClick={onClick} />
  </Section>
);

Facilities.propTypes = {
  onClick: PropTypes.func,
};

export default Facilities;
