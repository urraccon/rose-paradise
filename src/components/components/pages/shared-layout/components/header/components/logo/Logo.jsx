import { NavLink } from 'react-router-dom';
import { Image } from './Logo.styles';
import logo from './images/logo-rose-paradise-v2-white-png.png';

const navStyle = {
  WebkitTapHighlightColor: 'transparent',
  lineHeight: 0,
};

const Logo = () => {
  return (
    <NavLink to="/" style={navStyle}>
      <Image src={logo} alt="logo paradisul trandafirilor" />
    </NavLink>
  );
};

export default Logo;
