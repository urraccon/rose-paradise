import { Typography } from '@mui/material';

const titleStyle = {
  color: 'white',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '21.6px',
  paddingBottom: '10px',
  textAlign: 'center',
};

const Subtitle1 = ({ children }) => (
  <Typography variant="h4" sx={titleStyle}>
    {children}
  </Typography>
);

export default Subtitle1;
