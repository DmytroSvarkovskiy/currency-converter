import styled from 'styled-components';

export const Casket = styled.div`
  width: 950px;
  height: 600px;
  padding: 15px;
  position: relative;
  border-radius: 1.5em;
  margin: 60px auto;
  box-shadow: rgba(158, 120, 97, 0.24) 0px 3px 8px;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  color: #756059;
`;

export const CurrencyList = styled.ul`
  display: flex;
  margin: 30px auto 0;
  font-weight: 500;
  font-size: 20px;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 40px;
  width: 600px;
  height: 460px;
  justify-content: center;
  align-items: center;
  color: #756059;
`;

export const BaseCurrencyWrap = styled.div`
  display: flex;
  color: #756059;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  position: absolute;
  left: 20px;
  top: 20px;
`;
export const Select = styled.select`
  border-radius: 5px;
  width: 60px;
  cursor: pointer;
  color: #756059;
  background-color: #f1ebe9;
  border-color: #756059;
`;
