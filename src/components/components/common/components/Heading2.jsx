import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const titleStyle = isLargerScreens => ({
  fontSize: isLargerScreens ? '32px' : '20px',
  fontWeight: 700,
  lineHeight: isLargerScreens ? '35.2px' : '22px',
  paddingBottom: '10px',
});

const Heading2 = ({ children, style }) => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });

  return (
    <Typography variant="h2" sx={titleStyle(isLargerScreens)} style={style}>
      {children}
    </Typography>
  );
};

Heading2.propTypes = {
  style: PropTypes.object,
};

export default Heading2;
