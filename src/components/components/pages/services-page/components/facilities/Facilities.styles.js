import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 0 110px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1280px) {
    padding: 25px 0 105px;
    flex-direction: unset;
    gap: 55px;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
