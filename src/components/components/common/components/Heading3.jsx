import { Typography } from '@mui/material';

const titleStyle = {
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '19.2px',
  paddingBottom: '10px',
};

const Heading3 = ({ children }) => (
  <Typography variant="h3" sx={titleStyle}>
    {children}
  </Typography>
);

export default Heading3;
