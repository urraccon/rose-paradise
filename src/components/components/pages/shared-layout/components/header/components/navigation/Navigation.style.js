import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  height: calc(100vh - 60px);
  width: 100vw;
  background-color: #fc77cc;
  top: 60px;
  right: 0;
  transition: transform 0.3s ease;
  z-index: 3;

  @media (min-width: 768px) {
    height: calc(100vh - 92px);
    top: 92px;
  }

  @media (max-height: 534px) {
    overflow: auto;
  }
`;

export const Icon = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 60px);

  @media (min-width: 768px) {
    height: calc(100% - 92px);
  }

  @media (max-height: 534px) {
    justify-content: unset;
  }
`;
