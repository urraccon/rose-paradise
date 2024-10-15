import Paragraph from 'components/components/common/components/Paragraph';
import { Section } from './PublicTransport.styles';

const boldTextStyle = { fontWeight: 600, textAlign: 'center' };

const textStyle = { textAlign: 'center' };

const PublicTransport = () => (
  <Section>
    <Paragraph style={boldTextStyle}>Mijloace de transport în comun:</Paragraph>
    <Paragraph style={textStyle}>
      Metrou: Stația de metrou Gorjului, Stații RATB: 61, 62, 106, 137, 138,
      236, 336
    </Paragraph>
  </Section>
);

export default PublicTransport;
