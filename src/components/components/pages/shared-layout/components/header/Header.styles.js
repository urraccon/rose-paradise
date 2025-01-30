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

  @media (min-width: 1280px) {
    height: 101px;
  }
`;

export const Container = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;
