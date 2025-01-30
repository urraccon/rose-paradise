import styled from 'styled-components';

export const Section = styled.section`
  padding: 35px 0 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    padding-bottom: 60px;
  }

  @media (min-width: 1280px) {
    padding-top: 30px;
    padding-bottom: 25px;
    flex-direction: row;
    gap: 55px;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ParagraphGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    gap: 55px;
    min-width: 300px;
  }
`;
