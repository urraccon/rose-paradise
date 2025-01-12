import styled from 'styled-components';

export const HeaderStyled = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  background-color: #fc77cc;
  z-index: 3;

  @media (min-width: 768px) {
    height: 92px;
  }
`;

export const Container = styled.div`
  height: inherit;
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0 75px;
  }
`;
