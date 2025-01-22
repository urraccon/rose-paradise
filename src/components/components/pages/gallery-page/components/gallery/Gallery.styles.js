import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0 115px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;

  @media (min-width: 768px) {
    padding-bottom: 125px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 45px;
  }
`;
