import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/pages/shared-layout/SharedLayout';
import HomePage from './components/pages/home-page/HomePage';
import ServicesPage from './components/pages/services-page/ServicesPage';
import PricesPage from './components/pages/prices-page/PricesPage';
import GalleryPage from './components/pages/gallery-page/GalleryPage';
import ContactPage from './components/pages/contact-page/ContactPage';
import ResetScroll from './components/common/components/ResetScroll';

export const App = () => (
  <BrowserRouter basename="/rose-paradise">
    <ResetScroll />
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="prices" element={<PricesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
