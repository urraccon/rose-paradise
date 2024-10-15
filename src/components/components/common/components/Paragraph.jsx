import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const textStyle = {
  color: '#666',
  lineHeight: '25.5px',
  fontSize: '15.5px',
};

const Paragraph = ({ children, style }) => (
  <Typography variant="body1" sx={textStyle} style={style}>
    {children}
  </Typography>
);

Paragraph.propTypes = {
  style: PropTypes.object,
};

export default Paragraph;
