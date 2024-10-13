import { Typography } from '@mui/material';

const titleStyle = {
  fontSize: '24px',
  fontWeight: '700',
  paddingBottom: '10px',
  lineHeight: '26.4px',
};

const Heading1 = ({ children }) => (
  <Typography variant="h1" sx={titleStyle}>
    {children}
  </Typography>
);

export default Heading1;
