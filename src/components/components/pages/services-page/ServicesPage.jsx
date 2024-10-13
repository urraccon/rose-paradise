import Facilities from './components/facilities/Facilities';
import Introduction from './components/introduction/Introduction';
import Services from './components/services/Services';
import { Main } from './ServicesPage.styles';
import ContactBanner from 'components/components/common/components/contact-banner/ContactBanner';

const ServicesPage = () => (
  <Main>
    <Introduction />
    <Services />
    <ContactBanner />
    <Facilities />
  </Main>
);

export default ServicesPage;
