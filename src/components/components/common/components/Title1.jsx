import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const titleStyle = {
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '22px',
  paddingBottom: '10px',
};

const Title1 = ({ children, style }) => (
  <Typography variant="h2" sx={titleStyle} style={style}>
    {children}
  </Typography>
);

Title1.propTypes = {
  style: PropTypes.object,
};

export default Title1;
