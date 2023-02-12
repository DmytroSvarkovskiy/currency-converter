import styled from 'styled-components';

export const Casket = styled.div`
  position: relative;
  border-radius: 1.5em;

  box-shadow: rgba(158, 120, 97, 0.24) 0px 3px 8px;
  @media (min-width: 320px) {
    width: 290px;
    min-height: 600px;
    margin: 20px auto;
    padding: 15px;
  }
  @media (min-width: 375px) {
    width: 345px;
    padding: 22px;
  }
  @media (min-width: 768px) {
    width: 740px;
    margin: 60px auto;
  }
  @media (min-width: 1024px) {
    width: 980px;
  }
`;
export const Title = styled.h1`
  text-align: center;
  @media (min-width: 320px) {
    font-size: 25px;
  }

  @media (min-width: 768px) {
    text-align: center;
    font-size: 35px;
  }
  @media (min-width: 1024px) {
  }

  color: #756059;
`;

export const CurrencyList = styled.ul`
  display: grid;
  gap: 20px;
  font-weight: 500;
  font-size: 16px;
  margin: 70px auto 10px;
  min-height: 550px;
  justify-content: center;
  align-items: center;
  color: #756059;
  @media (min-width: 768px) {
    margin: 30px 70px 0px;
    gap: 40px;
    grid-template-columns: 245px 245px;
    font-weight: 500;
    font-size: 20px;
    width: 600px;
  }
  @media (min-width: 1024px) {
    margin: 30px 70px 0px;
    width: 900px;
    grid-template-columns: 245px 245px 245px;
  }
`;

export const BaseCurrencyWrap = styled.div`
  @media (min-width: 320px) {
    flex-direction: row;
    align-items: center;
    display: flex;
    color: #756059;
    gap: 10px;
    font-weight: 500;
    position: absolute;
    left: 40px;
    top: 90px;
  }

  @media (min-width: 375px) {
    left: 70px;
    top: 70px;
  }
  @media (min-width: 768px) {
    left: 20px;
    top: 35px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Select = styled.select`
  border-radius: 5px;
  width: 60px;
  cursor: pointer;
  color: #756059;
  background-color: #f1ebe9;
  border-color: #756059;
`;
