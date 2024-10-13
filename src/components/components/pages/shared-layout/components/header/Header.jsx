import { Container, HeaderStyled } from './Header.styles';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
