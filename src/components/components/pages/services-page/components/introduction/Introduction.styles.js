import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1280px) {
    padding: 75px 0 25px;
    flex-direction: row;
    gap: 55px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 55px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 30px;
`;
