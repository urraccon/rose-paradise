import Contact from './components/contact/Contact';
import Map from './components/Map';
import PublicTransport from './components/public-transport/PublicTransport';
import { Main } from './ContactPage.styles';

const ContactPage = () => (
  <Main>
    <Contact />
    <Map />
    <PublicTransport />
  </Main>
);

export default ContactPage;
