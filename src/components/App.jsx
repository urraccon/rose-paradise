import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/pages/shared-layout/SharedLayout';
import HomePage from './components/pages/home-page/HomePage';
import ServicesPage from './components/pages/services-page/ServicesPage';

export const App = () => {
  return (
    <BrowserRouter basename="/rose-paradise">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          {/* <Route path="prices" element={<PricesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
