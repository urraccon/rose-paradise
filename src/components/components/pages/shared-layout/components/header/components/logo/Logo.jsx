import { NavLink } from 'react-router-dom';
import { Image } from './Logo.styles';
import logo from './images/logo-rose-paradise-v2-white-png.png';
import PropTypes from 'prop-types';

const navStyle = {
  WebkitTapHighlightColor: 'transparent',
  lineHeight: 0,
};

const Logo = ({ handleClick }) => (
  <NavLink to="/" style={navStyle} onClick={handleClick}>
    <Image src={logo} alt="logo-ul paradisului trandafirilor" />
  </NavLink>
);

Logo.propTypes = {
  handleClick: PropTypes.func,
};

export default Logo;
