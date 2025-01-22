import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const btnStyle = arrowVisibility => ({
  color: 'white',
  border: '2px solid',
  textTransform: 'none',
  fontSize: '20px',
  padding: '6px 20px',
  lineHeight: '34px',
  borderRadius: '3px',
  width: 'fit-content',

  '&:hover': {
    border: arrowVisibility ? 'none' : '2px solid',
    backgroundColor: arrowVisibility && 'rgba(255, 255, 255, 0.2)',
  },
});

const iconStyle = {
  width: 0,
  height: 0,
  transition: 'height 0.2s ease, width 0.2s ease',
};

const ServicesButton = ({ children }) => {
  const navigate = useNavigate();
  const [arrowVisibility, setArrowVisibility] = useState(false);

  return (
    <Button
      variant="outlined"
      sx={btnStyle(arrowVisibility)}
      onClick={() => navigate('services')}
      onMouseEnter={() => setArrowVisibility(true)}
      onMouseLeave={() => setArrowVisibility(false)}
      onTouchStart={() => setArrowVisibility(true)}
      onTouchEnd={() => setArrowVisibility(false)}
      disableRipple
    >
      {children}
      <NavigateNextIcon
        sx={iconStyle}
        style={{
          height: arrowVisibility && '35px',
          width: arrowVisibility && '35px',
        }}
      />
    </Button>
  );
};

export default ServicesButton;
