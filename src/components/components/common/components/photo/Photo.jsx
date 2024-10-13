import { Container, Image, ImageFrame } from './Photo.style';
import PropTypes from 'prop-types';

const Photo = ({ src, alt }) => (
  <Container>
    <ImageFrame />
    <Image src={src} alt={alt} />
  </Container>
);

export default Photo;

Photo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
