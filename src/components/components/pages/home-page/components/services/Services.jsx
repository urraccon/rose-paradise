import Title1 from 'components/components/common/components/Title1';
import { Container, Icon, Item, List, Section } from './Services.styles';
import ServicesButton from 'components/components/common/components/ServicesButton';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Subtitle1 from 'components/components/common/components/Subtitle1';

const titleStyle = {
  color: 'white',
  textAlign: 'center',
};

const iconStyle = {
  width: '48px',
  height: '48px',
  fill: '#fc77cc',
};

const Services = () => {
  return (
    <Section>
      <Container>
        <Title1 style={titleStyle}>Servicii & Facilitati</Title1>
        <List>
          <Item>
            <Icon>
              <VolunteerActivismIcon style={iconStyle} />
            </Icon>
            <Subtitle1>Asistenta 24 de ore</Subtitle1>
          </Item>
          <Item>
            <Icon>
              <MedicalServicesIcon sx={iconStyle} />
            </Icon>
            <Subtitle1>Servicii medicale</Subtitle1>
          </Item>
          <Item>
            <Icon>
              <SanitizerIcon sx={iconStyle} />
            </Icon>
            <Subtitle1>Servicii curatenie</Subtitle1>
          </Item>
          <Item>
            <Icon>
              <RestaurantIcon style={iconStyle} />
            </Icon>
            <Subtitle1>3 mese + 2 gustari/zi</Subtitle1>
          </Item>
          <Item>
            <Icon>
              <ContentCutIcon style={iconStyle} />
            </Icon>
            <Subtitle1>Cosmetica & Igiena</Subtitle1>
          </Item>
        </List>
        <ServicesButton>Vezi toate serviciile si facilitatile</ServicesButton>
      </Container>
    </Section>
  );
};

export default Services;
