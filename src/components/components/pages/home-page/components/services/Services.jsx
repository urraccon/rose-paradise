import Heading2 from 'components/components/common/components/Heading2';
import { Icon, Item, List, Section } from './Services.styles';
import ServicesButton from 'components/components/common/components/ServicesButton';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ChairIcon from '@mui/icons-material/Chair';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import Heading4 from './components/Heading4';

const titleStyle = {
  color: 'white',
  textAlign: 'center',
};

const iconStyle = {
  width: '48px',
  height: '48px',
  fill: '#fc77cc',
};

const Services = () => (
  <Section>
    <Heading2 style={titleStyle}>Servicii & Facilitati</Heading2>
    <List>
      <Item>
        <Icon>
          <MedicalServicesIcon style={iconStyle} />
        </Icon>
        <Heading4>Îngrijire medicală continuă</Heading4>
      </Item>
      <Item>
        <Icon>
          <WheelchairPickupIcon sx={iconStyle} />
        </Icon>
        <Heading4>Asistență zilnică</Heading4>
      </Item>
      <Item>
        <Icon>
          <RestaurantIcon style={iconStyle} />
        </Icon>
        <Heading4>Mese sănătoase și echilibrate</Heading4>
      </Item>
      <Item>
        <Icon>
          <ChairIcon style={iconStyle} />
        </Icon>
        <Heading4>Camere confortabile</Heading4>
      </Item>
      <Item>
        <Icon>
          <CameraIndoorIcon style={iconStyle} />
        </Icon>
        <Heading4>Supraveghere constantă</Heading4>
      </Item>
    </List>
    <ServicesButton>Vezi toate serviciile si facilitatile</ServicesButton>
  </Section>
);

export default Services;
