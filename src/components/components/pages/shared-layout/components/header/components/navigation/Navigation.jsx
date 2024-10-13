import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Nav } from './Navigation.style';
import PropTypes from 'prop-types';
import NavButton from './components/NavButton';

const iconStyle = {
  fill: 'white',
  width: '30px',
  height: '30px',
  transition: 'height 0.3s ease, width 0.3s ease',
};

const closeBtnStyle = open => ({
  height: !open && 0,
  width: !open && 0,
  padding: !open && 0,
});

const openBtnStyle = open => ({
  height: open && 0,
  width: open && 0,
  padding: open && 0,
});

const Navigation = ({ open, handleClose, handleOpen }) => (
  <>
    <Container>
      <IconButton onClick={handleOpen} style={openBtnStyle(open)}>
        <MenuIcon sx={iconStyle} style={openBtnStyle(open)} />
      </IconButton>
      <IconButton onClick={handleClose} style={closeBtnStyle(open)}>
        <CloseIcon sx={iconStyle} style={closeBtnStyle(open)} />
      </IconButton>
    </Container>
    <Nav style={{ transform: !open && 'translateX(100vw)' }}>
      <NavButton to="services" handleClose={handleClose}>
        Servicii
      </NavButton>
      <NavButton to="prices" handleClose={handleClose}>
        Preturi
      </NavButton>
      <NavButton to="gallery" handleClose={handleClose}>
        Galerie
      </NavButton>
      <NavButton to="contact" handleClose={handleClose}>
        Contact
      </NavButton>
    </Nav>
  </>
);

Navigation.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
};

export default Navigation;
