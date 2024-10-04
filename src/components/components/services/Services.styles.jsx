import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fec5e5;
`;

export const Container = styled.div`
  padding: 110px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Card = styled.div`
  width: calc(100% - 35px * 2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border: 1px solid #ff1694;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const ButtonLink = styled.a`
  all: unset;
  align-self: center;
`;
