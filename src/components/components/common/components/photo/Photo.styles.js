import styled from 'styled-components';

export const ImageFrame = styled.div`
  padding: 4px;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const ImageContainer = styled.div`
  height: calc(100vw - 35px * 2);
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
