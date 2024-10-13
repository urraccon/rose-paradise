import PriceCard from './components/price-card/PriceCard';
import { Section } from './Prices.styles';

const Prices = () => (
  <Section>
    <PriceCard
      title="loc in camera cu 4 paturi"
      price={3000}
      includedServices={[
        'baie comună, pe hol',
        'servicii de curățenie a spațiului locativ',
        '3 mese pe zi plus 2 gustari',
        'asistenta medicala si supraveghere 24 ore/ zi',
        'igiena personala',
        'asistență medicală non-stop',
        'infirmiere non-stop',
        'medic generalist (1 -2 vizite/sapatamana)',
        'psiholog (2 vizite/ lună)',
        'medic psihiatru (2 vizite/lună)',
        'medic neurolog (1 vizita/lună)',
        'medic cardiolog (1 vizita/lună)',
      ]}
    />
    <PriceCard
      title="loc in camera cu 4 paturi"
      price={3300}
      includedServices={[
        'baie privată',
        'servicii de curățenie a spațiului locativ',
        '3 mese pe zi plus 2 gustari',
        'asistenta medicala si supraveghere 24 ore/ zi',
        'igiena personala',
        'asistență medicală non-stop',
        'infirmiere non-stop',
        'medic generalist (1 -2 vizite/sapatamana)',
        'psiholog (2 vizite/ lună)',
        'medic psihiatru (2 vizite/lună)',
        'medic neurolog (1 vizita/lună)',
        'medic cardiolog (1 vizita/lună)',
      ]}
    />
    <PriceCard
      title="loc in camera cu 3 paturi"
      price={3800}
      includedServices={[
        'baie privată',
        'servicii de curățenie a spațiului locativ',
        '3 mese pe zi plus 2 gustari',
        'asistenta medicala si supraveghere 24 ore/ zi',
        'igiena personala',
        'asistență medicală non-stop',
        'infirmiere non-stop',
        'medic generalist (1 -2 vizite/sapatamana)',
        'psiholog (2 vizite/ lună)',
        'medic psihiatru (2 vizite/lună)',
        'medic neurolog (1 vizita/lună)',
        'medic cardiolog (1 vizita/lună)',
      ]}
    />
    <PriceCard
      title="loc in camera cu 2 paturi"
      price={4300}
      includedServices={[
        'baie privată',
        'servicii de curățenie a spațiului locativ',
        '3 mese pe zi plus 2 gustari',
        'asistenta medicala si supraveghere 24 ore/ zi',
        'igiena personala',
        'asistență medicală non-stop',
        'infirmiere non-stop',
        'medic generalist (1 -2 vizite/sapatamana)',
        'psiholog (2 vizite/ lună)',
        'medic psihiatru (2 vizite/lună)',
        'medic neurolog (1 vizita/lună)',
        'medic cardiolog (1 vizita/lună)',
      ]}
    />
  </Section>
);

export default Prices;
