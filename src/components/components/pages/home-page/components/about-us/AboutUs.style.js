import styled from 'styled-components';

export const Section = styled.section`
  padding: 35px 0;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    padding-bottom: 60px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
`;
