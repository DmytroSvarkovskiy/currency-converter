import styled from 'styled-components';
import { RiExchangeDollarLine, RiArrowRightLine } from 'react-icons/ri';

export const ConvertTitle = styled.h2`
  @media (min-width: 320px) {
    font-size: 25px;
    text-align: center;
    color: #756059;
    margin-bottom: 30px;
  }
  @media (min-width: 375px) {
    font-size: 25px;
  }
  @media (min-width: 768px) {
    font-size: 35px;
    margin-bottom: 100px;
  }
`;
export const FlagConvert = styled.img`
  @media (min-width: 320px) {
    border: 1px solid #756059;
    overflow: hidden;
    border-radius: 7px;
    width: 140px;
    height: 80px;
  }
  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;
export const WrapMainContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  @media (min-width: 768px) {
    gap: 20px;
  }
`;
export const WrapSelect = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    gap: 0;
    flex-direction: row;
  }
`;
export const SelectConvert = styled.select`
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  border: none;
  display: flex;
  outline: none;
  background-color: #e6e6e6;
  font-size: 22px;
  color: #756059;
  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    font-weight: 600;
    height: 80px;
  }
`;
export const InputConvert = styled.input`
  @media (min-width: 320px) {
    color: #756059;
    background-color: #eeecec;
    border: none;
    width: 250px;
    font-size: 40px;
    border-radius: 7px;
  }
  @media (min-width: 375px) {
    width: 300px;
  }
  @media (min-width: 768px) {
    padding: 5px 10px;
    font-size: 55px;
    width: 380px;
    font-weight: 600;
    height: 120px;
    height: 80px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
`;
export const ConvertIcon = styled(RiExchangeDollarLine)`
  @media (min-width: 320px) {
    height: 50px;
    width: 50px;
    color: #c4907e;
    transition: color 0.3s;
  }
`;
export const TextConvert = styled.p`
  @media (min-width: 320px) {
    font-size: 20px;
    font-weight: 500;
    color: #756059;
  }
  @media (min-width: 768px) {
    width: 60px;
    font-size: 26px;
    margin-right: 15px;
  }
`;
export const ArrowConvert = styled(RiArrowRightLine)`
  height: 30px;
  width: 30px;
  rotate: 90deg;
  @media (min-width: 768px) {
    rotate: 0deg;
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }

  color: #756059;
`;
export const ButtonConvert = styled.button`
  background-color: transparent;
  border: none;
  margin: 25px 0 15px;
  @media (min-width: 768px) {
    margin-left: 180px;
    cursor: pointer;
    &:hover {
      svg {
        color: #e79537;
      }
    }
  }
`;
export const CurrencyName = styled.p`
  color: #756059;
  font-size: 25px;
  font-weight: 600;
  margin: 15px 0;

  @media (min-width: 768px) {
    margin: 0 0 0 20%;
  }
`;
