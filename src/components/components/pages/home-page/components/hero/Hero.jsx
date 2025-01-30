import { Container, Content, Section } from './Hero.styles';
import ServicesButton from 'components/components/common/components/ServicesButton';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const titleStyle = (isLargerScreens, isDesktop) => ({
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: isDesktop ? 300 : 500,
  textAlign: 'center',
  lineHeight: isDesktop ? '46px' : isLargerScreens ? '26px' : '20px',
  paddingBottom: '10px',
  fontSize: isDesktop ? 46 : isLargerScreens ? 26 : 20,
  textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
});

const Hero = () => {
  const navigate = useNavigate();
  const isLargerScreens = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <Section onClick={() => navigate('services')}>
      <Container>
        <Content>
          <Typography
            variant="h2"
            sx={titleStyle(isLargerScreens, isDesktop)}
            onClick={() => navigate('services')}
          >
            serviciile caminului Paradisul Trandafirilor Înfloriți
          </Typography>
          <ServicesButton>Vezi detalii</ServicesButton>
        </Content>
      </Container>
    </Section>
  );
};

export default Hero;
