import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const btnStyle = {
  color: 'white',
  border: '2px solid white',
  textTransform: 'none',
  fontSize: '20px',
  fontWeight: 400,
  padding: '6px 20px',
  lineHeight: '34px',

  '&:hover': {
    border: '2px solid white',
  },
};

const iconStyle = {
  width: 0,
  height: 0,
  transition: 'height 0.3s ease, width 0.3s ease',
};

const ServicesButton = ({ children }) => {
  const navigate = useNavigate();
  const [arrowVisibility, setArrowVisibility] = useState(false);

  return (
    <Button
      variant="outlined"
      sx={btnStyle}
      onClick={() => navigate('services')}
      onMouseEnter={() => setArrowVisibility(true)}
      onMouseLeave={() => setArrowVisibility(false)}
      onTouchStart={() => setArrowVisibility(true)}
      onTouchEnd={() => setArrowVisibility(false)}
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
