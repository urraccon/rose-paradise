import { Container, HeaderStyled } from './Header.styles';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [toggler, setToggler] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <HeaderStyled>
      <Container>
        {isDesktop ? (
          <>
            <Logo />
            <Navigation />
          </>
        ) : (
          <>
            <Logo onClick={() => setToggler(false)} />
            <Navigation
              toggler={toggler}
              onClick={() => setToggler(!toggler)}
            />
          </>
        )}
      </Container>
    </HeaderStyled>
  );
};

export default Header;
