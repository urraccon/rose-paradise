import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;

  @media (min-width: 768px) {
    top: 92px;
  }

  @media (min-width: 1280px) {
    top: 101px;
  }
`;
