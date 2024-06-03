import { Typography } from '@mui/material';
import { Container, Section } from './About.styles';

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Typography
          variant="h4"
          sx={{
            color: '#ff1694',
            textTransform: 'uppercase',
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          Povestea noastra
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero totam
          fugit nulla eos, exercitationem quos ipsam in enim reprehenderit
          nesciunt at recusandae amet, quaerat eveniet blanditiis vel libero
          officiis fugiat. Rerum minus laudantium vel libero beatae? Neque
          similique quod ab.
        </Typography>
      </Container>
    </Section>
  );
};

export default About;
