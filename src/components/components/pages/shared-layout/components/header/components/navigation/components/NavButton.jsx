import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { StyledNavLink } from './NavButton.styled';

const textStyle = isDesktop => ({
  color: 'white',
  fontSize: isDesktop ? 16 : 50,
  fontWeight: isDesktop ? 500 : 700,
  lineHeight: isDesktop ? '16px' : 'normal',
  transition: 'all 0.4s ease-in-out',
});

const NavButton = ({ onClick, to, children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <StyledNavLink to={to} onClick={onClick}>
      <Typography
        className="nav-text"
        variant="button"
        sx={textStyle(isDesktop)}
      >
        {children}
      </Typography>
    </StyledNavLink>
  );
};

NavButton.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavButton;
