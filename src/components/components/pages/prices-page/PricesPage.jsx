import ContactBanner from 'components/components/common/components/contact-banner/ContactBanner';
import Introduction from './components/introduction/Introduction';
import Prices from './components/prices/Prices';
import { Main } from './PricesPage.styles';
import AdditionalServices from './components/additional services/AdditionalServices';

const PricesPage = () => (
  <Main>
    <Introduction />
    <Prices />
    <AdditionalServices />
    <ContactBanner />
  </Main>
);

export default PricesPage;
