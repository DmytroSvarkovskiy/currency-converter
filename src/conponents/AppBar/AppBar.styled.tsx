import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsCurrencyExchange } from 'react-icons/bs';
import { SiConvertio } from 'react-icons/si';

export const Nav = styled.nav`
  padding: 10px;
  display: flex;
  height: 80px;
  justify-content: start;
  align-items: center;
  gap: 40px;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 2px solid #d3db5b;
`;
export const Link = styled(NavLink)`
  padding: 6px 10px 9px;
  display: flex;
  align-items: center;
  color: #3f152f;
  :hover {
    color: orange;
  }
  transition: color 0.3s;
  &.active {
    outline: 1px solid orange;
    color: orange;
    border-radius: 1.3em;
  }
`;
export const CurrencyIcon = styled(BsCurrencyExchange)`
  width: 25px;
  height: 25px;
  margin-right: 9px;
`;
export const ConvertIcon = styled(SiConvertio)`
  width: 25px;
  height: 25px;
  margin-right: 9px;
`;
