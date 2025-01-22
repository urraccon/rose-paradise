import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const textStyle = {
  color: '#666',
  lineHeight: '27px',
  fontSize: '15px',
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
