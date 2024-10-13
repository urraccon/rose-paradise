import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  height: calc(100vw - 35px * 2);
  border-radius: 30px;
  position: relative;
  border: 2px solid #fc77cc;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImageFrame = styled.div`
  position: absolute;
  background-color: #fc77cc;
  width: calc(100% + 2px * 2);
  height: calc(100% + 2px * 2);
  left: 50%;
  bottom: 85%;
  transform: rotate(45deg);
`;
