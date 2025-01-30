import { Section, ParagraphGroup, ImageGroup, LeftSide } from './AboutUs.style';
import diningRoom from '../../../../common/images/dining-room.jpg';
import bedroomThreeBeds from '../../../../common/images/bedroom-three-beds-4.jpg';
import Heading2 from 'components/components/common/components/Heading2';
import Paragraph from 'components/components/common/components/Paragraph';
import Photo from 'components/components/common/components/photo/Photo';
import PropTypes from 'prop-types';

const AboutUs = ({ onClick }) => (
  <Section>
    <LeftSide>
      <Heading2>Despre noi</Heading2>
      <ParagraphGroup>
        <Paragraph>
          Paradisul Trandafirilor Înfloriți este situat în comuna Glina, județul
          Ilfov, într-un cadru liniștit și accesibil. Locația noastră oferă
          seniorilor un spațiu unde confortul și armonia se îmbină perfect,
          creând un refugiu ideal pentru odihnă și socializare. Grădina de
          trandafiri, emblema noastră, adaugă o notă de frumusețe și serenitate,
          devenind locul preferat al rezidenților pentru momente de relaxare și
          contemplare.
        </Paragraph>
        <Paragraph>
          Echipa noastră de profesioniști este formată din medici, asistenți și
          terapeuți dedicați, care își pun toată experiența și devotamentul în
          slujba seniorilor. Fiecare membru al personalului contribuie cu
          expertiza sa pentru a oferi îngrijire de calitate și suport în fiecare
          zi. La Paradisul Trandafirilor Înfloriți, sănătatea și bunăstarea
          rezidenților sunt priorități absolute.
        </Paragraph>
        <Paragraph>
          Mai mult decât un cămin, Paradisul Trandafirilor Înfloriți este o
          adevărată comunitate, unde spiritul de familie este prezent în fiecare
          moment. Organizăm activități speciale care aduc zâmbete și creează
          momente de neuitat pentru rezidenți. Aici, fiecare zi este o
          oportunitate de a construi amintiri valoroase și de a trăi într-un
          mediu primitor, unde seniorii se simt apreciați și conectați cu cei
          din jur.
        </Paragraph>
      </ParagraphGroup>
    </LeftSide>
    <ImageGroup>
      <Photo id={1} src={diningRoom} alt="sala de mese" onClick={onClick} />
      <Photo
        id={2}
        src={bedroomThreeBeds}
        alt="dormitor cu 3 paturi"
        onClick={onClick}
      />
    </ImageGroup>
  </Section>
);

AboutUs.propTypes = {
  onClick: PropTypes.func,
};

export default AboutUs;
