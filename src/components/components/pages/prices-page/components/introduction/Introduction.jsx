import Heading1 from 'components/components/common/components/Heading1';
import {
  Container,
  LeftSide,
  RightSide,
  Section,
  TextGroup,
} from './Introduction.styles';
import Photo from 'components/components/common/components/photo/Photo';
import Paragraph from 'components/components/common/components/Paragraph';
import bedroomTwoBeds from '../../../../common/images/bedroom-two-beds.jpg';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const photoStyle = (isLargerScreens, isDesktop) => ({
  height: isDesktop ? 358.4 : isLargerScreens && 545.2,
  width: isDesktop ? 400 : isLargerScreens && 600,
  padding: isDesktop ? 20 : isLargerScreens && 25,
  border: isDesktop
    ? '1px solid #cdcdcd'
    : isLargerScreens && '2px solid #cdcdcd',
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
            <Heading1>Preturi si Beneficii</Heading1>
            <Photo
              id={1}
              src={bedroomTwoBeds}
              alt="dormitor cu 2 paturi"
              onClick={onClick}
              style={photoStyle(isLargerScreens, isDesktop)}
            />
          </LeftSide>
          <RightSide>
            <Paragraph>
              Tarifele noastre sunt ajustate în funcție de starea de sănătate a
              rezidentului și de cerințele suplimentare specifice acestuia.
              Evaluăm cu atenție fiecare caz, pentru a oferi un pachet
              personalizat care reflectă nevoile individuale. Astfel, prețul
              final poate varia în funcție de complexitatea îngrijirii necesare.
            </Paragraph>
            <Paragraph>
              Pachetul de bază include cazare, trei mese pe zi, administrarea
              tratamentelor, monitorizarea stării de sănătate, sprijin în
              activitățile zilnice, igiena personală, spălarea și călcarea
              rufelor, supraveghere continuă 24/7 și consult medical periodic.
            </Paragraph>
          </RightSide>
        </>
      ) : (
        <>
          <Heading1>Preturi si Beneficii</Heading1>
          <Container>
            <Photo
              id={1}
              src={bedroomTwoBeds}
              alt="dormitor cu 2 paturi"
              onClick={onClick}
              style={photoStyle(isLargerScreens)}
            />
            <TextGroup>
              <Paragraph>
                Tarifele noastre sunt ajustate în funcție de starea de sănătate
                a rezidentului și de cerințele suplimentare specifice acestuia.
                Evaluăm cu atenție fiecare caz, pentru a oferi un pachet
                personalizat care reflectă nevoile individuale. Astfel, prețul
                final poate varia în funcție de complexitatea îngrijirii
                necesare.
              </Paragraph>
              <Paragraph>
                Pachetul de bază include cazare, trei mese pe zi, administrarea
                tratamentelor, monitorizarea stării de sănătate, sprijin în
                activitățile zilnice, igiena personală, spălarea și călcarea
                rufelor, supraveghere continuă 24/7 și consult medical periodic.
              </Paragraph>
            </TextGroup>
          </Container>
        </>
      )}
    </Section>
  );
};

Introduction.propTypes = {
  onClick: PropTypes.func,
};

export default Introduction;
