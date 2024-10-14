import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const navStyle = {
  textDecoration: 'unset',
  display: 'inline-block',
};

const textStyle = {
  color: 'white',
  fontSize: 50,
  fontWeight: '700',
};

const NavButton = ({ onClick, to, children }) => (
  <NavLink to={to} style={navStyle} onClick={onClick}>
    <Typography variant="button" sx={textStyle}>
      {children}
    </Typography>
  </NavLink>
);

NavButton.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavButton;
