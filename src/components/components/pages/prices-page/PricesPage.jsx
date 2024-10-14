import ContactBanner from 'components/components/common/components/contact-banner/ContactBanner';
import Introduction from './components/introduction/Introduction';
import Prices from './components/prices/Prices';
import { Main } from './PricesPage.styles';
import AdditionalServices from './components/additional services/AdditionalServices';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import bedroomTwoBeds from '../../common/images/bedroom-two-beds.jpg';
import sharedBathroom from '../../common/images/shared-bathroom-2.jpg';

const PricesPage = () => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const handleClick = evt => {
    setToggler(!toggler);
    setSlide(evt.target.id);
  };

  return (
    <Main>
      <Introduction onClick={handleClick} />
      <Prices />
      <AdditionalServices onClick={handleClick} />
      <ContactBanner />
      <FsLightbox
        toggler={toggler}
        sources={[bedroomTwoBeds, sharedBathroom]}
        slide={slide}
      />
    </Main>
  );
};

export default PricesPage;
