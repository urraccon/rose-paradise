import { Typography } from '@mui/material';
import { Container, Image, ImageContainer, ImageFrame } from './Photo.styles';
import PropTypes from 'prop-types';

const textStyle = {
  paddingLeft: '15px',
  fontSize: '13px',
};

const Photo = ({ src, alt, onClick, id }) => (
  <Container>
    <ImageFrame>
      <ImageContainer onClick={onClick}>
        <Image src={src} alt={alt} id={id} />
      </ImageContainer>
    </ImageFrame>
    <Typography variant="overline" sx={textStyle}>
      {alt}
    </Typography>
  </Container>
);

Photo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

export default Photo;
