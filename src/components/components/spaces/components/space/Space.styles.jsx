import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ImageWrapper = styled.div`
  width: 320px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid white;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const Image = styled.img`
  height: 320px;
`;
