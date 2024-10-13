import styled from 'styled-components';
import garden from './images/garden-2.jpg';

export const Section = styled.section`
  height: 225px;
  width: 100vw;
  background-image: url(${garden});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 0 35px;
  box-sizing: border-box;
`;
