import { Container, Image, ImageContainer, ImageFrame } from './Photo.styles';
import PropTypes from 'prop-types';

const Photo = ({ src, alt, onClick, id, style }) => (
  <Container style={{ display: style?.display, alignSelf: style?.alignSelf }}>
    <ImageFrame style={{ ...style, height: style?.width }}>
      <ImageContainer onClick={onClick} style={{ height: style?.height }}>
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
  style: PropTypes.object,
};

export default Photo;
