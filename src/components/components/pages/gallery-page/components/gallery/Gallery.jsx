import FsLightbox from 'fslightbox-react';
import { Section } from './Gallery.styles';
import Photo from '../../../../common/components/photo/Photo';
import { useState } from 'react';
import retirementHome from '../../../../common/images/retirement-home.jpg';
import retirementHome2 from '../../../../common/images/retirement-home-2.jpg';
import livingRoom from '../../../../common/images/living-room.jpg';
import livingRoom2 from '../../../../common/images/living-room-2.jpg';
import diningRoom from '../../../../common/images/dining-room.jpg';
import bedroomTwoBeds from '../../../../common/images/bedroom-two-beds.jpg';
import bedroomTwoBeds2 from '../../../../common/images/bedroom-two-beds-2.jpg';
import bedroomTwoBeds3 from '../../../../common/images/bedroom-two-beds-3.jpg';
import bedroomThreeBeds from '../../../../common/images/bedroom-three-beds.jpg';
import bedroomThreeBeds2 from '../../../../common/images/bedroom-three-beds-2.jpg';
import bedroomThreeBeds3 from '../../../../common/images/bedroom-three-beds-3.jpg';
import sharedBathroom from '../../../../common/images/shared-bathroom.jpg';
import sharedBathroom2 from '../../../../common/images/shared-bathroom-2.jpg';
import privateBathroom from '../../../../common/images/private-bathroom.jpg';
import medicalOffice from '../../../../common/images/medical-office.jpg';
import garden from '../../../../common/images/garden.jpg';
import garden2 from '../../../../common/images/garden-2.jpg';
import kitchen from '../../../../common/images/kitchen.jpg';
import kitchen2 from '../../../../common/images/kitchen-2.jpg';
import kitchen3 from '../../../../common/images/kitchen-3.jpg';
import hall from '../../../../common/images/hall.jpg';
import hall2 from '../../../../common/images/hall-2.jpg';
import hall3 from '../../../../common/images/hall-3.jpg';
import stairs from '../../../../common/images/stairs.jpg';

const Gallery = () => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const handleClick = evt => {
    setToggler(!toggler);
    setSlide(evt.target.id);
  };

  return (
    <Section>
      <Photo
        id={1}
        src={retirementHome}
        alt="camin de batrani Paradisul Trandafirilor"
        onClick={handleClick}
      />
      <Photo
        id={2}
        src={retirementHome2}
        alt="camin de batrani Paradisul Trandafirilor"
        onClick={handleClick}
      />
      <Photo id={3} src={livingRoom} alt="sufragerie" onClick={handleClick} />
      <Photo id={4} src={livingRoom2} alt="sufragerie" onClick={handleClick} />
      <Photo id={5} src={diningRoom} alt="sala de mese" onClick={handleClick} />
      <Photo
        id={6}
        src={bedroomTwoBeds}
        alt="camera cu 2 paturi"
        onClick={handleClick}
      />
      <Photo
        id={7}
        src={bedroomTwoBeds2}
        alt="camera cu 2 paturi"
        onClick={handleClick}
      />
      <Photo
        id={8}
        src={bedroomTwoBeds3}
        alt="camera cu 2 paturi"
        onClick={handleClick}
      />
      <Photo
        id={9}
        src={bedroomThreeBeds}
        alt="camera cu 3 paturi"
        onClick={handleClick}
      />
      <Photo
        id={10}
        src={bedroomThreeBeds2}
        alt="camera cu 3 paturi"
        onClick={handleClick}
      />
      <Photo
        id={11}
        src={bedroomThreeBeds3}
        alt="camera cu 3 paturi"
        onClick={handleClick}
      />
      <Photo
        id={12}
        src={sharedBathroom}
        alt="baie comuna"
        onClick={handleClick}
      />
      <Photo
        id={13}
        src={sharedBathroom2}
        alt="baie comuna"
        onClick={handleClick}
      />
      <Photo
        id={14}
        src={privateBathroom}
        alt="baie privata"
        onClick={handleClick}
      />
      <Photo
        id={15}
        src={medicalOffice}
        alt="cabinet medical"
        onClick={handleClick}
      />
      <Photo id={16} src={garden} alt="gradina" onClick={handleClick} />
      <Photo id={17} src={garden2} alt="gradina" onClick={handleClick} />
      <Photo id={18} src={kitchen} alt="bucatarie" onClick={handleClick} />
      <Photo id={19} src={kitchen2} alt="bucatarie" onClick={handleClick} />
      <Photo id={20} src={kitchen3} alt="bucatarie" onClick={handleClick} />
      <Photo id={21} src={hall} alt="hol" onClick={handleClick} />
      <Photo id={22} src={hall2} alt="hol" onClick={handleClick} />
      <Photo id={23} src={hall3} alt="hol" onClick={handleClick} />
      <Photo id={24} src={stairs} alt="scari" onClick={handleClick} />
      <FsLightbox
        toggler={toggler}
        sources={[
          retirementHome,
          retirementHome2,
          livingRoom,
          livingRoom2,
          diningRoom,
          bedroomTwoBeds,
          bedroomTwoBeds2,
          bedroomTwoBeds3,
          bedroomThreeBeds,
          bedroomThreeBeds2,
          bedroomThreeBeds3,
          sharedBathroom,
          sharedBathroom2,
          privateBathroom,
          medicalOffice,
          garden,
          garden2,
          kitchen,
          kitchen2,
          kitchen3,
          hall,
          hall2,
          hall3,
          stairs,
        ]}
        slide={slide}
      />
    </Section>
  );
};

export default Gallery;
