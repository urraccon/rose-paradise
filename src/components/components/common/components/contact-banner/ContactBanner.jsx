import { Button, Typography } from '@mui/material';
import { Container } from './ContactBanner.styles';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const textStyle = isDesktop => ({
  fontSize: 18,
  lineHeight: '23.8px',
  color: 'white',
  textTransform: 'uppercase',
  textAlign: 'center',
  padding: isDesktop ? '18px 0 15px' : 'none',
});

const btnStyle = isDesktop => ({
  fontSize: 18,
  color: 'white',
  border: '2px solid',
  textTransform: 'none',
  fontWeight: 400,
  padding: '6px 18px',
  lineHeight: '30.6px',
  marginRight: isDesktop ? '30px' : 'none',
  borderRadius: '3px',
  transition: 'all 0.3s ease',

  '&:hover': {
    border: '2px solid transparent',
    borderRadius: 0,
    backgroundColor: 'rgba(0, 0, 0, .05)',
  },
});

const ContactBanner = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <Container>
      <Typography variant="body1" sx={textStyle(isDesktop)}>
        Programeaza o vizita sau cere mai multe informatii
      </Typography>
      <Button
        variant="outlined"
        sx={btnStyle(isDesktop)}
        onClick={() => navigate('/contact')}
        disableRipple
      >
        Vezi pagina de contact
      </Button>
    </Container>
  );
};

export default ContactBanner;
