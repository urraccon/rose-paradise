import styled from 'styled-components';

export const Section = styled.section`
  background-image: linear-gradient(243deg, #c6c6c6 1%, #fc77cc 100%);
  padding: 35px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  @media (min-width: 768px) {
    padding: 35px 75px 60px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 40px;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media (min-width: 768px) {
    flex: 1 1 calc(50% - 40px);
  }
`;

export const Icon = styled.div`
  padding: 20px;
  background-color: white;
  width: fit-content;
  border-radius: 20px;
`;
