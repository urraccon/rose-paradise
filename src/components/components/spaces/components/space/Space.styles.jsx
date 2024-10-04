import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 0 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

export const TextWrapper = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ImageWrapper = styled.div`
  width: calc(100% - 30px * 2);
  padding: 0 15px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const Image = styled.img`
  height: 345px;
`;
