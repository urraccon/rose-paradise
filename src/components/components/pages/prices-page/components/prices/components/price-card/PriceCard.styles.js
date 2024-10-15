import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #bebebe;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

export const Title = styled.div`
  height: 45px;
  background-color: #fc77cc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PriceContainer = styled.div`
  height: 105px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;
  border-bottom: 1px solid #bebebe;
  box-sizing: border-box;
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
  position: absolute;
  top: 16%;
  left: 30%;
`;

export const Frequency = styled.span`
  font-size: 11px;
  line-height: 11px;
  color: #999;
  position: absolute;
  top: 48%;
  left: 63.5%;
`;

export const List = styled.ul`
  padding: 30px 30px 80px 45px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 0;
`;

export const Item = styled.li`
  color: #666;
  font-size: 15px;
  line-height: 24px;

  &::marker {
    color: #fc77cc;
  }
`;
