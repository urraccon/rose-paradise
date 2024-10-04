import { Typography } from '@mui/material';
import { Container, Section } from './Contact.styles';

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <Typography
          variant="h4"
          sx={{
            color: '#ff1694',
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          Contact
        </Typography>
      </Container>
    </Section>
  );
};

export default Contact;
