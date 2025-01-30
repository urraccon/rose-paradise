import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const titleStyle = (isLargerScreens, isDesktop) => ({
  fontSize: isDesktop ? 40 : isLargerScreens ? 20 : 16,
  fontWeight: 700,
  lineHeight: isDesktop ? '48px' : isLargerScreens ? '24px' : '19.2px',
  paddingBottom: '10px',
});

const Heading3 = ({ children }) => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <Typography variant="h3" sx={titleStyle(isLargerScreens, isDesktop)}>
      {children}
    </Typography>
  );
};

export default Heading3;
