import { useState } from 'react';
import Facilities from './components/facilities/Facilities';
import Introduction from './components/introduction/Introduction';
import Services from './components/services/Services';
import { Main } from './ServicesPage.styles';
import ContactBanner from 'components/components/common/components/contact-banner/ContactBanner';
import FsLightbox from 'fslightbox-react';
import kitchen from '../../common/images/kitchen-3.jpg';
import medicalOffice from '../../common/images/medical-office.jpg';
import { useMediaQuery } from 'react-responsive';

const ServicesPage = () => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const handleClick = evt => {
    setToggler(!toggler);
    setSlide(evt.target.id);
  };

  return (
    <Main>
      <Introduction onClick={handleClick} />
      {!isDesktop && <Services />}
      <ContactBanner />
      <Facilities onClick={handleClick} />
      <FsLightbox
        toggler={toggler}
        sources={[kitchen, medicalOffice]}
        slide={slide}
      />
    </Main>
  );
};

export default ServicesPage;
