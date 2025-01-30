import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0 60px;

  @media (min-width: 1280px) {
    padding: 75px 0 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fc77cc;
  font-weight: 700;
`;

export const Span = styled.span`
  color: #fc77cc;
  font-weight: 700;
`;
