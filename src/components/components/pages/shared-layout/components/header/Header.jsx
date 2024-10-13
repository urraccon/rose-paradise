import { Container, HeaderStyled } from './Header.styles';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderStyled>
      <Container>
        <Logo handleClick={() => setOpen(false)} />
        <Navigation
          open={open}
          handleClose={() => setOpen(false)}
          handleOpen={() => setOpen(true)}
        />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
