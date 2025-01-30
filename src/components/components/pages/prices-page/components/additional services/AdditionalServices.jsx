import Heading3 from 'components/components/common/components/Heading3';
import { LeftSide, Section } from './AdditionalServices.styles';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/list/item/Item';
import Photo from 'components/components/common/components/photo/Photo';
import sharedBathroom from '../../../../common/images/shared-bathroom-2.jpg';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const photoStyle = (isLargerScreens, isDesktop) => ({
  height: isDesktop ? 358.4 : isLargerScreens && 545.2,
  width: isDesktop ? 400 : isLargerScreens && 600,
  padding: isDesktop ? 20 : isLargerScreens && 25,
  border: isDesktop
    ? '1px solid #cdcdcd'
    : isLargerScreens && '2px solid #cdcdcd',
  display: 'flex',
  alignSelf: 'center',
  maxWidth: isLargerScreens && 'unset',
});

const AdditionalServices = ({ onClick }) => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <Section>
      <LeftSide>
        <Heading3>Servicii Suplimentare:</Heading3>
        <List>
          <Item>transport la medic sau la alte consultații externe;</Item>
          <Item>controlul tensiunii arteriale și al glicemiei;</Item>
          <Item>monitorizarea și gestionarea afecțiunilor cronice;</Item>
          <Item>servicii de fizioterapie și recuperare;</Item>
          <Item>alte servicii disponibile la cererea rezidentului;</Item>
        </List>
      </LeftSide>
      <Photo
        id={2}
        src={sharedBathroom}
        alt="baie comuna"
        onClick={onClick}
        style={photoStyle(isLargerScreens, isDesktop)}
      />
    </Section>
  );
};

AdditionalServices.propTypes = {
  onClick: PropTypes.func,
};

export default AdditionalServices;
