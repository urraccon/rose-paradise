import Heading3 from 'components/components/common/components/Heading3';
import { Section } from './Facilities.styles';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/item/Item';
import Photo from 'components/components/common/components/photo/Photo';
import medicalOffice from '../../../../common/images/medical-office.jpg';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const photoStyle = isLargerScreens => ({
  height: isLargerScreens && '545.2px',
  width: isLargerScreens && '600px',
  padding: isLargerScreens && '25px',
  border: isLargerScreens && '2px solid #cdcdcd',
  display: isLargerScreens && 'flex',
  alignSelf: isLargerScreens && 'center',
});

const Facilities = ({ onClick }) => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });

  return (
    <Section>
      <Heading3>Facilitati</Heading3>
      <List>
        <Item>camere private sau comune confortabile;</Item>
        <Item>spații pentru socializare și activități recreative;</Item>
        <Item>bucătărie complet echipată pentru prepararea meselor;</Item>
        <Item>grădină sau curte pentru relaxare în aer liber;</Item>
        <Item>acces facil la facilități de igienă (băi adaptate);</Item>
        <Item>spațiu pentru vizite în intimitate;</Item>
        <Item>zone de lectură și bibliotecă;</Item>
        <Item>sistem de alarmă pentru urgențe;</Item>
        <Item>
          Wi-Fi și acces la tehnologie pentru comunicare și divertisment;
        </Item>
        <Item>locuri de parcare pentru vizitatori;</Item>
      </List>
      <Photo
        id={2}
        src={medicalOffice}
        alt="cabinet medical"
        onClick={onClick}
        style={photoStyle(isLargerScreens)}
      />
    </Section>
  );
};

Facilities.propTypes = {
  onClick: PropTypes.func,
};

export default Facilities;
