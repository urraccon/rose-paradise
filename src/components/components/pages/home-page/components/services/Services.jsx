import Heading2 from 'components/components/common/components/Heading2';
import { Icon, Item, List, Section } from './Services.styles';
import ServicesButton from 'components/components/common/components/ServicesButton';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
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
          <VolunteerActivismIcon style={iconStyle} />
        </Icon>
        <Heading4>Asistenta 24 de ore</Heading4>
      </Item>
      <Item>
        <Icon>
          <MedicalServicesIcon sx={iconStyle} />
        </Icon>
        <Heading4>Servicii medicale</Heading4>
      </Item>
      <Item>
        <Icon>
          <SanitizerIcon sx={iconStyle} />
        </Icon>
        <Heading4>Servicii curatenie</Heading4>
      </Item>
      <Item>
        <Icon>
          <RestaurantIcon style={iconStyle} />
        </Icon>
        <Heading4>3 mese + 2 gustari/zi</Heading4>
      </Item>
      <Item>
        <Icon>
          <ContentCutIcon style={iconStyle} />
        </Icon>
        <Heading4>Cosmetica & Igiena</Heading4>
      </Item>
    </List>
    <ServicesButton>Vezi toate serviciile si facilitatile</ServicesButton>
  </Section>
);

export default Services;
