import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const titleStyle = isLargerScreens => ({
  fontSize: isLargerScreens ? '20px' : '16px',
  fontWeight: 700,
  lineHeight: isLargerScreens ? '24px' : '19.2px',
  paddingBottom: '10px',
});

const Heading3 = ({ children }) => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });

  return (
    <Typography variant="h3" sx={titleStyle(isLargerScreens)}>
      {children}
    </Typography>
  );
};

export default Heading3;
