import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: #2d2d2d;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1280px) {
    padding: 30px 0;
    flex-direction: row;
    gap: 55px;
    justify-content: center;
  }
`;

export const ContactInfo = styled.div`
  @media (min-width: 1280px) {
    width: 450px;
  }
`;
