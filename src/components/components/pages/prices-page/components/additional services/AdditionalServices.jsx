import Heading3 from 'components/components/common/components/Heading3';
import { Section } from './AdditionalServices.styles';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/item/Item';
import Photo from 'components/components/common/components/photo/Photo';
import sharedBathroom from '../../../../common/images/shared-bathroom-2.jpg';
import PropTypes from 'prop-types';

const AdditionalServices = ({ onClick }) => (
  <Section>
    <Heading3>Servicii Suplimentare:</Heading3>
    <List>
      <Item>transport la medic sau la alte consultații externe;</Item>
      <Item>controlul tensiunii arteriale și al glicemiei;</Item>
      <Item>monitorizarea și gestionarea afecțiunilor cronice;</Item>
      <Item>servicii de fizioterapie și recuperare;</Item>
      <Item>alte servicii disponibile la cererea rezidentului;</Item>
    </List>
    <Photo id={2} src={sharedBathroom} alt="baie comuna" onClick={onClick} />
  </Section>
);

AdditionalServices.propTypes = {
  onClick: PropTypes.func,
};

export default AdditionalServices;
