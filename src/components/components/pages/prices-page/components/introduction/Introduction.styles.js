import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1280px) {
    padding: 75px 0 80px;
    flex-direction: unset;
    gap: 55px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;
