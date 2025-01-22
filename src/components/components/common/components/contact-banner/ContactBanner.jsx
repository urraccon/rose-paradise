import { Button, Typography } from '@mui/material';
import { Container } from './ContactBanner.styles';
import { useNavigate } from 'react-router-dom';

const textStyle = {
  fontSize: '18px',
  lineHeight: '23.8px',
  color: 'white',
  textTransform: 'uppercase',
  textAlign: 'center',
};

const btnStyle = {
  fontSize: '18px',
  color: 'white',
  border: '2px solid',
  textTransform: 'none',
  fontWeight: 400,
  padding: '6px 20px',
  lineHeight: '30.6px',

  '&:hover': {
    border: '2px solid transparent',
    borderRadius: 0,
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(0, 0, 0, .05)',
  },
};

const ContactBanner = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="body1" sx={textStyle}>
        Programeaza o vizita sau cere mai multe informatii
      </Typography>
      <Button
        variant="outlined"
        sx={btnStyle}
        onClick={() => navigate('/contact')}
        disableRipple
      >
        Vezi pagina de contact
      </Button>
    </Container>
  );
};

export default ContactBanner;
