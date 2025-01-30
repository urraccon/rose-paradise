import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const titleStyle = (isLargerScreens, isDesktop) => ({
  fontSize: isDesktop ? 45 : isLargerScreens ? 40 : 24,
  fontWeight: 700,
  paddingBottom: '10px',
  lineHeight: isDesktop ? '49.5px' : isLargerScreens ? '44px' : '26.4px',
});

const Heading1 = ({ children }) => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <Typography variant="h1" sx={titleStyle(isLargerScreens, isDesktop)}>
      {children}
    </Typography>
  );
};

export default Heading1;
