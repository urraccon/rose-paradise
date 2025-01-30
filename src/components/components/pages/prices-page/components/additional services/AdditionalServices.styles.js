import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1280px) {
    padding-bottom: 25px;
    flex-direction: unset;
    align-items: center;
    gap: 55px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
