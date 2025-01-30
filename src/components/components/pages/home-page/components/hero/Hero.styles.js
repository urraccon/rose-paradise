import styled from 'styled-components';
import garden from '../../../../common/images/garden.jpg';

export const Section = styled.section`
  height: 225px;
  width: 100%;
  background-image: url(${garden});
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  @media (min-width: 768px) {
    height: 321px;
  }
  @media (min-width: 1280px) {
    height: 526px;
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  width: inherit;
  height: inherit;
`;

export const Content = styled.div`
  height: inherit;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
