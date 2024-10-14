import { Container, HeaderStyled } from './Header.styles';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';
import { useState } from 'react';

const Header = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <HeaderStyled>
      <Container>
        <Logo onClick={() => setToggler(false)} />
        <Navigation toggler={toggler} onClick={() => setToggler(!toggler)} />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
