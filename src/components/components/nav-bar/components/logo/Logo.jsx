import { Typography } from '@mui/material';
import { Container } from './Logo.styles';

const Logo = () => {
  return (
    <Container>
      <Typography
        sx={{
          color: '#ff1694',
          textTransform: 'uppercase',
          lineHeight: '18px',
          fontWeight: 500,
        }}
      >
        Paradisul
      </Typography>
      <Typography
        sx={{
          color: '#ff1694',
          textTransform: 'uppercase',

          lineHeight: '18px',
          fontWeight: 500,
        }}
      >
        Trandafirilor
      </Typography>
    </Container>
  );
};

export default Logo;
