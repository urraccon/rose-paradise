import { Typography } from '@mui/material';
import { Container, Image, ImageWrapper, TextWrapper } from './Space.styles';

const Space = ({ title, description, image }) => {
  return (
    <Container>
      <TextWrapper>
        <Typography
          variant="h4"
          sx={{
            color: '#ff1694',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
          }}
        >
          {description}
        </Typography>
      </TextWrapper>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
    </Container>
  );
};

export default Space;
