import styled from 'styled-components';
import { RiExchangeDollarLine, RiArrowRightLine } from 'react-icons/ri';

export const ConvertTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  color: #756059;
  margin-bottom: 100px;
`;
export const FlagConvert = styled.img`
  width: 140px;
  height: 80px;
  border-radius: 7px;
  overflow: hidden;
  margin-right: 10px;
  border: 1px solid #756059;
`;
export const WrapMainContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
export const WrapSelect = styled.div`
  display: flex;
  align-items: center;
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
  font-weight: 600;
  height: 80px;
`;
export const InputConvert = styled.input`
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border: none;
  padding: 5px 10px;
  font-size: 55px;
  width: 380px;
  font-weight: 600;
  color: #756059;
  height: 120px;
  height: 80px;
`;
export const ConvertIcon = styled(RiExchangeDollarLine)`
  height: 50px;
  width: 50px;
  color: #c4907e;
  transition: color 0.3s;
`;
export const TextConvert = styled.p`
  width: 60px;
  font-size: 26px;
  font-weight: 500;
  color: #756059;
  margin-right: 15px;
`;
export const ArrowConvert = styled(RiArrowRightLine)`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  color: #756059;
`;
export const ButtonConvert = styled.button`
  background-color: transparent;
  padding-left: 180px;
  border: none;
  cursor: pointer;
  &:hover {
    svg {
      color: #e79537;
    }
  }
`;
