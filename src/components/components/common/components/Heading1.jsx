import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const titleStyle = isLargerScreens => ({
  fontSize: isLargerScreens ? '40px' : '24px',
  fontWeight: '700',
  paddingBottom: '10px',
  lineHeight: isLargerScreens ? '44px' : '26.4px',
});

const Heading1 = ({ children }) => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });

  return (
    <Typography variant="h1" sx={titleStyle(isLargerScreens)}>
      {children}
    </Typography>
  );
};

export default Heading1;
