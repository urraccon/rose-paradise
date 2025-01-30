import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Icon, Nav } from './Navigation.style';
import PropTypes from 'prop-types';
import NavButton from './components/NavButton';
import { useMediaQuery } from 'react-responsive';

const iconStyle = {
  fill: 'white',
  width: '30px',
  height: '30px',
  transition: 'height 0.3s ease, width 0.3s ease',
};

const closeBtnStyle = toggler => ({
  height: !toggler && 0,
  width: !toggler && 0,
  padding: !toggler && 0,
});

const menuBtnStyle = toggler => ({
  height: toggler && 0,
  width: toggler && 0,
  padding: toggler && 0,
});

const Navigation = ({ toggler, onClick }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      {!isDesktop && (
        <Icon>
          <IconButton onClick={onClick} style={menuBtnStyle(toggler)}>
            <MenuIcon sx={iconStyle} style={menuBtnStyle(toggler)} />
          </IconButton>
          <IconButton onClick={onClick} style={closeBtnStyle(toggler)}>
            <CloseIcon sx={iconStyle} style={closeBtnStyle(toggler)} />
          </IconButton>
        </Icon>
      )}
      <Nav
        style={isDesktop ? {} : { transform: !toggler && 'translateX(100vw)' }}
      >
        <Container>
          <NavButton to="services" onClick={onClick}>
            Servicii
          </NavButton>
          <NavButton to="prices" onClick={onClick}>
            Preturi
          </NavButton>
          <NavButton to="gallery" onClick={onClick}>
            Galerie
          </NavButton>
          <NavButton to="contact" onClick={onClick}>
            Contact
          </NavButton>
        </Container>
      </Nav>
    </>
  );
};

Navigation.propTypes = {
  toggler: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Navigation;
