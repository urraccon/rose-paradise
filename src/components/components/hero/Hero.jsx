import { Button, Typography } from '@mui/material';
import { ButtonLink, Container, Content, Section, Title } from './Hero.styles';

const Hero = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Title>
            <Typography
              variant="h4"
              sx={{
                color: '#ff1694',
                textTransform: 'uppercase',
                lineHeight: '40px',
              }}
            >
              Paradisul
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: '#ff1694',
                textTransform: 'uppercase',
                lineHeight: '40px',
              }}
            >
              Trandafirilor
            </Typography>
          </Title>
          <ButtonLink href="#about">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ff1694',
                ':hover': {
                  backgroundColor: '#ff1694',
                },
              }}
            >
              Vezi caminul
            </Button>
          </ButtonLink>
        </Content>
      </Container>
    </Section>
  );
};

export default Hero;
