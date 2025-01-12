import PriceCard from './components/price-card/PriceCard';
import { Section } from './Prices.styles';

const Prices = () => (
  <Section>
    <PriceCard
      title="incepand de la"
      price={4500}
      includedServices={[
        'asistență medicală permanentă 24/7',
        'administrarea tratamentelor și medicamentelor conform prescripției',
        'evaluarea periodică a stării de sănătate',
        'asistență pentru persoanele cu dizabilități sau mobilitate redusă',
        'sprijin în alimentație și monitorizarea regimurilor speciale de dietă',
        'suport pentru menținerea igienei personale (băi, dușuri, schimbat lenjerie)',
        'evaluare și monitorizare a stării emoționale și psihologice',
        'servicii de curățenie și întreținere a spațiilor comune și private',
        'supraveghere 24/7 pentru siguranța rezidenților',
        'intervenții de urgență și suport în caz de accidentări',
      ]}
    />
  </Section>
);

export default Prices;
