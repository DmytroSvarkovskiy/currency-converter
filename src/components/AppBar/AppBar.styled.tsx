import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsCurrencyExchange } from 'react-icons/bs';
import { SiConvertio } from 'react-icons/si';

export const Nav = styled.nav`
  @media (min-width: 320px) {
    gap: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  @media (min-width: 375px) {
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    height: 80px;
    align-items: center;
    gap: 40px;
  }
  @media (min-width: 768px) {
    justify-content: start;
  }

  font-size: 20px;
  font-weight: 500;
  border-bottom: 2px solid #ac8c42;
`;
export const Link = styled(NavLink)`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    padding: 7px;
    width: 100%;
    transition: color 0.4s;
    color: #3f152f;
    :hover {
      color: orange;
    }

    &.active {
      outline: 1px solid orange;
      color: orange;
      border-radius: 1.3em;
    }
  }
  @media (min-width: 375px) {
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 6px 10px 9px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const CurrencyIcon = styled(BsCurrencyExchange)`
  @media (min-width: 320px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 320px) {
    width: 25px;
    height: 25px;
  }

  margin-right: 9px;
`;
export const ConvertIcon = styled(SiConvertio)`
  @media (min-width: 320px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 320px) {
    width: 25px;
    height: 25px;
  }

  margin-right: 9px;
`;
