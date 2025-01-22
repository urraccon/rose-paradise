import { Container, Section } from './Hero.styles';
import ServicesButton from 'components/components/common/components/ServicesButton';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const titleStyle = isLargerScreens => ({
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 500,
  textAlign: 'center',
  lineHeight: isLargerScreens ? '26px' : '20px',
  paddingBottom: '10px',
  fontSize: isLargerScreens ? '26px' : '20px',
  textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
});

const Hero = () => {
  const navigate = useNavigate();
  const isLargerScreens = useMediaQuery({ minWidth: 768 });

  return (
    <Section onClick={() => navigate('services')}>
      <Container>
        <Typography
          variant="h2"
          sx={titleStyle(isLargerScreens)}
          onClick={() => navigate('services')}
        >
          serviciile caminului Paradisul Trandafirilor Înfloriți
        </Typography>
        <ServicesButton>Vezi detalii</ServicesButton>
      </Container>
    </Section>
  );
};

export default Hero;
