import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #bebebe;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  width: 305px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  height: 45px;
  background-color: #fc77cc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PriceContainer = styled.div`
  padding: 20px 0 30px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #bebebe;
  font-family: Jost;
`;

export const Price = styled.span`
  font-size: 40px;
  color: #fc77cc;
  line-height: 60px;
  font-weight: 300;
`;

export const Currency = styled.span`
  font-size: 11px;
  line-height: 11px;
  color: #999;
`;

export const Frequency = styled.span`
  font-size: 11px;
  line-height: 11px;
  color: #999;
  align-self: end;
  padding-bottom: 15px;
`;

export const List = styled.ul`
  padding: 30px 30px 80px 45px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0;
`;

export const Item = styled.li`
  color: #666;
  font-size: 14px;
  line-height: 22.4px;

  &::marker {
    color: #fc77cc;
  }
`;
