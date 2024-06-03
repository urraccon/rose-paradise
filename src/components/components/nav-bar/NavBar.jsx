import { IconButton } from '@mui/material';
import { Container, Home, Section } from './NavBar.styles';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from 'components/components/nav-bar/components/logo/Logo';

const NavBar = () => {
  return (
    <Section>
      <Container>
        <Home href="#">
          <Logo />
        </Home>
        <IconButton>
          <MenuIcon
            sx={{
              fill: '#ff1694',
            }}
          />
        </IconButton>
      </Container>
    </Section>
  );
};

export default NavBar;
