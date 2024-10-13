import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Nav } from './Navigation.style';
import { NavLink } from 'react-router-dom';

const iconStyle = {
  fill: 'white',
  width: '30px',
  height: '30px',
  transition: 'height 0.3s ease, width 0.3s ease',
};

const navStyle = {
  textDecoration: 'unset',
  display: 'inline-block',
};

const textStyle = {
  color: 'white',
  fontSize: 50,
  textTransform: 'uppercase',
  fontWeight: '700',
};

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(!open)}>
        <CloseIcon
          sx={iconStyle}
          style={{
            height: !open && 0,
            width: !open && 0,
          }}
        />
        <MenuIcon
          sx={iconStyle}
          style={{
            height: open && 0,
            width: open && 0,
          }}
        />
      </IconButton>
      <Nav style={{ transform: !open && 'translateX(100vw)' }}>
        <Container>
          <NavLink to="services" style={navStyle}>
            <Typography sx={textStyle}>Servicii</Typography>
          </NavLink>
          <NavLink to="prices" style={navStyle}>
            <Typography sx={textStyle}>Preturi</Typography>
          </NavLink>
          <NavLink to="gallery" style={navStyle}>
            <Typography sx={textStyle}>Galerie</Typography>
          </NavLink>
          <NavLink to="contact" style={navStyle}>
            <Typography sx={textStyle}>Contact</Typography>
          </NavLink>
        </Container>
      </Nav>
    </>
  );
};

export default Navigation;
