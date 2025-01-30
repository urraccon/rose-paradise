import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const textStyle = isDesktop => ({
  color: '#666',
  lineHeight: isDesktop ? '28.8px' : '27px',
  fontSize: isDesktop ? 16 : 15,
});

const Paragraph = ({ children, style }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <Typography variant="body1" sx={textStyle(isDesktop)} style={style}>
      {children}
    </Typography>
  );
};

Paragraph.propTypes = {
  style: PropTypes.object,
};

export default Paragraph;
