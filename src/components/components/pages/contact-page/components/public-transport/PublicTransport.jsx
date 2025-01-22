import Paragraph from 'components/components/common/components/Paragraph';
import { Section } from './PublicTransport.styles';

const boldTextStyle = {
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '14px',
  lineHeight: '23.8px',
};

const textStyle = {
  textAlign: 'center',
  fontSize: '14px',
  lineHeight: '23.8px',
};

const PublicTransport = () => (
  <Section>
    <Paragraph style={boldTextStyle}>Mijloace de transport în comun:</Paragraph>
    <Paragraph style={textStyle}>
      Metrou M3 „Nicolae Teclu” + autobuz 405 „Cămin Cultural”
    </Paragraph>
  </Section>
);

export default PublicTransport;
