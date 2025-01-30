import styled from 'styled-components';

export const Section = styled.section`
  background-image: linear-gradient(243deg, #c6c6c6 1%, #fc77cc 100%);
`;

export const Container = styled.div`
  padding: 35px 0 60px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  width: 80%;
  margin: auto;

  @media (min-width: 1280px) {
    padding: 50px 0;
    width: unset;
    margin: unset;
    gap: 50px;
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

  @media (min-width: 1280px) {
    gap: 66px;
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

  @media (min-width: 1280px) {
    flex: unset;
    width: 185px;
  }
`;

export const Icon = styled.div`
  padding: 20px;
  background-color: white;
  width: fit-content;
  border-radius: 20px;
`;

export const ButtonContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
`;
