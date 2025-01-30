import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fc77cc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
  padding: 20px 0 10px;

  @media (min-width: 1280px) {
    flex-direction: row;
    padding: unset;
    gap: 170px;
  }
`;
