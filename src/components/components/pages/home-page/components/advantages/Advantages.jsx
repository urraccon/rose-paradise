import Heading2 from 'components/components/common/components/Heading2';
import {
  LeftSide,
  ParagraphGroup,
  Section,
  TextGroup,
} from './Advatages.styles';
import Paragraph from 'components/components/common/components/Paragraph';
import Photo from 'components/components/common/components/photo/Photo';
import garden from '../../../../common/images/garden-2.jpg';
import List from 'components/components/common/components/list/List';
import Item from 'components/components/common/components/list/item/Item';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const photoStyle = (isLargerScreens, isDesktop) => ({
  height: isDesktop ? 358.4 : isLargerScreens && 545.2,
  width: isDesktop ? 400 : isLargerScreens && 600,
  padding: isDesktop ? '20px' : isLargerScreens && '25px',
  border: isDesktop
    ? '1px solid #cdcdcd'
    : isLargerScreens && '2px solid #cdcdcd',
  minWidth: isDesktop && 400,
  maxWidth: isLargerScreens && 'unset',
  display: 'flex',
  alignSelf: 'center',
});

const Advantages = ({ onClick }) => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <Section>
      <LeftSide>
        <Heading2>Avantajele noastre</Heading2>
        <TextGroup>
          <List>
            <Item>echipă de profesioniști experimentați;</Item>
            <Item>facilități moderne și inovative;</Item>
            <Item>camere spațioase, dotate complet;</Item>
            <Item>spații excelente pentru socializare și recreere;</Item>
          </List>
          <ParagraphGroup>
            <Paragraph>
              Paradisul Trandafirilor Înfloriți se bucură de o echipă
              diversificată de profesioniști – medici, terapeuți și asistenți,
              fiecare cu o vastă experiență în îngrijirea seniorilor. Dedicarea
              și profesionalismul echipei noastre garantează îngrijire de
              excepție, oferind atenție fiecărui detaliu.
            </Paragraph>
            <Paragraph>
              Clădirea noastră modernă, proaspăt finalizată, este dotată cu
              facilități de ultimă generație, concepute pentru a răspunde
              perfect nevoilor rezidenților și a asigura un confort impecabil.
              Camerele spațioase și zonele comune sunt gândite pentru a oferi un
              cadru funcțional și relaxant, ideal pentru odihnă și socializare.
            </Paragraph>
          </ParagraphGroup>
        </TextGroup>
      </LeftSide>
      <Photo
        id={3}
        src={garden}
        alt="gradina"
        onClick={onClick}
        style={photoStyle(isLargerScreens, isDesktop)}
      />
    </Section>
  );
};

Advantages.propType = {
  onClick: PropTypes.func,
};

export default Advantages;
