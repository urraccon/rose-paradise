import Facilities from './components/facilities/Facilities';
import Services from './components/services/Services';
import { Main } from './ServicesPage.styles';

const ServicesPage = () => (
  <Main>
    <Services />
    <Facilities />
  </Main>
);

export default ServicesPage;
