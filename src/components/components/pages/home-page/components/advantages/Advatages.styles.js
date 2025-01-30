import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;

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

export const TextGroup = styled.div``;

export const ParagraphGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1280px) {
    gap: 16px;
  }
`;
