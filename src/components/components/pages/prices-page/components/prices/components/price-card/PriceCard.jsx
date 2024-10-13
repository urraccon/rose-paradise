import { Typography } from '@mui/material';
import {
  Container,
  Currency,
  Frequency,
  Item,
  List,
  Price,
  PriceContainer,
  Title,
} from './PriceCard.styles';
import PropTypes from 'prop-types';

const titleStyle = {
  color: 'white',
  textTransform: 'uppercase',
  fontSize: '20px',
  lineHeight: '20px',
  fontWeight: 400,
  paddingBottom: '5px',
};

const PriceCard = ({ title, price, includedServices }) => (
  <Container>
    <Title>
      <Typography variant="h2" sx={titleStyle}>
        {title}
      </Typography>
    </Title>
    <PriceContainer>
      <Currency>RON</Currency>
      <Price>{price}</Price>
      <Frequency>/luna</Frequency>
    </PriceContainer>
    <List>
      {includedServices.map(service => (
        <Item key={`${includedServices.indexOf(service)}`}>{service}</Item>
      ))}
    </List>
  </Container>
);

PriceCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  includedServices: PropTypes.array,
};

export default PriceCard;
