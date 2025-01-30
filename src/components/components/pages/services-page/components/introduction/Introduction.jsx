import { Content, LeftSide, RightSide, Section } from './Introduction.styles';
import Heading1 from 'components/components/common/components/Heading1';
import Photo from 'components/components/common/components/photo/Photo';
import kitchen from '../../../../common/images/kitchen-3.jpg';
import Paragraph from 'components/components/common/components/Paragraph';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Services from '../services/Services';

const photoStyle = (isLargerScreens, isDesktop) => ({
  height: isDesktop ? 456.8 : isLargerScreens && 545.2,
  width: isDesktop ? 500 : isLargerScreens && 600,
  padding: isDesktop ? 20 : isLargerScreens && 25,
  border: isLargerScreens && '2px solid #cdcdcd',
  maxWidth: isLargerScreens && 'unset',
});

const Introduction = ({ onClick }) => {
  const isLargerScreens = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <Section>
      {isDesktop ? (
        <>
          <LeftSide>
            <Heading1>Servicii si Facilitati</Heading1>
            <Photo
              id={1}
              src={kitchen}
              alt="bucatarie"
              onClick={onClick}
              style={photoStyle(isLargerScreens, isDesktop)}
            />
          </LeftSide>
          <RightSide>
            <Paragraph>
              Paradisul Trandafirilor Înfloriți oferă servicii complete de
              îngrijire medicală, inclusiv administrarea tratamentelor și
              monitorizarea stării de sănătate a rezidenților. Supravegherea
              video 24/7 permite intervenția rapidă a personalului în caz de
              nevoie. În plus, sprijinim activitățile zilnice și asigurăm
              consiliere emoțională pentru a contribui la bunăstarea fiecărui
              rezident.
            </Paragraph>
            <Services />
          </RightSide>
        </>
      ) : (
        <>
          <Heading1>Servicii si Facilitati</Heading1>
          <Content>
            <Photo
              id={1}
              src={kitchen}
              alt="bucatarie"
              onClick={onClick}
              style={photoStyle(isLargerScreens, isDesktop)}
            />
            <Paragraph>
              Paradisul Trandafirilor Înfloriți oferă servicii complete de
              îngrijire medicală, inclusiv administrarea tratamentelor și
              monitorizarea stării de sănătate a rezidenților. Supravegherea
              video 24/7 permite intervenția rapidă a personalului în caz de
              nevoie. În plus, sprijinim activitățile zilnice și asigurăm
              consiliere emoțională pentru a contribui la bunăstarea fiecărui
              rezident.
            </Paragraph>
          </Content>
        </>
      )}
    </Section>
  );
};

Introduction.propTypes = {
  onClick: PropTypes.func,
};

export default Introduction;
