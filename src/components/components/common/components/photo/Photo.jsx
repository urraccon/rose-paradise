import { Container, Image, ImageContainer, ImageFrame } from './Photo.styles';
import PropTypes from 'prop-types';

const Photo = ({ src, alt, onClick, id }) => (
  <Container>
    <ImageFrame>
      <ImageContainer onClick={onClick}>
        <Image src={src} alt={alt} id={id} />
      </ImageContainer>
    </ImageFrame>
  </Container>
);

Photo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

export default Photo;
