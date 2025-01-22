import { Typography } from '@mui/material';
import { Container, Link, Section } from './Contact.styles';

const titleStyle = {
  fontSize: '27px',
  color: '#333',
  paddingBottom: '10px',
  lineHeight: '27px',
  fontWeight: 500,
  textAlign: 'center',
};

const textStyle = {
  fontSize: '16px',
  color: '#666',
  lineHeight: '27.2px',
  textAlign: 'center',
};

const Contact = () => (
  <Section>
    <Typography variant="h1" sx={titleStyle}>
      Caminul Paradisul Trandafirilor Înfloriți
    </Typography>
    <Container>
      <Typography variant="body1" sx={textStyle}>
        Adresa:{' '}
        <Link
          href="https://www.google.com/maps/place/Intrarea+Morii+8,+Glina+077105/@44.3868352,26.244218,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1fcc3aeb6e8a5:0xbcb71359ba5d6391!8m2!3d44.3868352!4d26.2467983!16s%2Fg%2F11jz8t863v?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Intr. Morii nr. 8A, comuna Glina, jud. Ilfov
        </Link>
      </Typography>
      <Typography variant="body1" sx={textStyle}>
        Telefoane: <Link href="tel:+40744995974">0744.995.974</Link>
      </Typography>
      <Typography variant="body1" sx={textStyle}>
        <Link href="mailto:office@paradisultrandafirilorinfloriti.ro">
          office@paradisultrandafirilorinfloriti.ro
        </Link>
      </Typography>
    </Container>
  </Section>
);

export default Contact;
