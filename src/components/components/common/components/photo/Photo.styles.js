import styled from 'styled-components';

export const ImageFrame = styled.div`
  padding: 15px;
  border: 1px solid #cdcdcd;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  width: 300px;
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  height: 266.8px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
