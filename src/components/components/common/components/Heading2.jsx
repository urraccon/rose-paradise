import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const titleStyle = (isLargerScreens, isDesktop) => ({
  fontSize: isDesktop ? 60 : isLargerScreens ? 32 : 20,
  fontWeight: 700,
  lineHeight: isDesktop ? '66px' : isLargerScreens ? '35.2px' : '22px',
  paddingBottom: '10px',
});

const Heading2 = ({ children, style }) => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <Typography
      variant="h2"
      sx={titleStyle(isLargerScreens, isDesktop)}
      style={style}
    >
      {children}
    </Typography>
  );
};

Heading2.propTypes = {
  style: PropTypes.object,
};

export default Heading2;
