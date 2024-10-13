import { Suspense } from 'react';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styles';
import Footer from 'components/components/pages/shared-layout/components/footer/Footer';

const SharedLayout = () => (
  <>
    <Header />
    <Container>
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </Container>
  </>
);

export default SharedLayout;
