import styled from 'styled-components';
import heroImg from '../../images/retirement-home-entrance.jpg';

export const Section = styled.section`
  height: inherit;
  display: flex;
  align-items: end;
`;

export const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  padding: 40px;
  position: absolute;
  top: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: rgba(254, 197, 229, 0.9);
  border-radius: 15px;
`;

export const Title = styled.div``;

export const ButtonLink = styled.a``;
