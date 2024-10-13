import { Typography } from '@mui/material';

const titleStyle = {
  color: 'white',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '21.6px',
  paddingBottom: '10px',
  textAlign: 'center',
};

const Heading4 = ({ children }) => (
  <Typography variant="h4" sx={titleStyle}>
    {children}
  </Typography>
);

export default Heading4;
