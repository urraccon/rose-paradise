import styled from 'styled-components';

export const Section = styled.section`
  height: 60px;
  width: inherit;
  position: fixed;
  background-color: #fec5e5;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const Container = styled.div`
  height: inherit;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Home = styled.a`
  all: unset;
`;
