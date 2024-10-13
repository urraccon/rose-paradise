import { Suspense } from 'react';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import { Container, MainContainer } from './SharedLayout.styles';
import Footer from 'components/components/pages/shared-layout/components/footer/Footer';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <MainContainer>
        <Suspense>
          <Outlet />
        </Suspense>
        <Footer />
      </MainContainer>
    </Container>
  );
};

export default SharedLayout;
