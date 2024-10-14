import { NavLink } from 'react-router-dom';
import { Image } from './Logo.styles';
import logo from '../../../../../../common/images/logo-rose-paradise-white.png';
import PropTypes from 'prop-types';

const navStyle = {
  WebkitTapHighlightColor: 'transparent',
  lineHeight: 0,
};

const Logo = ({ onClick }) => (
  <NavLink to="/" style={navStyle} onClick={onClick}>
    <Image src={logo} alt="logo-ul paradisului trandafirilor" />
  </NavLink>
);

Logo.propTypes = {
  onClick: PropTypes.func,
};

export default Logo;
