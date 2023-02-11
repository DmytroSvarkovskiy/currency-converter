import styled from 'styled-components';
import { RiExchangeDollarLine } from 'react-icons/ri';

export const ConvertTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  color: #756059;
  margin-bottom: 40px;
`;
export const FlagConvert = styled.img`
  width: 160px;
  height: 80px;
  border-radius: 7px;
  overflow: hidden;
  margin-right: 10px;
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
`;
export const SelectConvert = styled.select`
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  border: none;
  display: flex;
  outline: none;
  background-color: #e6e6e6;
  font-size: 25px;
  color: #756059;
  font-weight: 600;
`;
export const InputConvert = styled.input`
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border: none;
  padding: 5px 10px;
  font-size: 38px;
  width: 350px;
  font-weight: 600;
  color: #756059;
`;
export const ConvertIcon = styled(RiExchangeDollarLine)`
  height: 50px;
  width: 50px;
  color: #c4907e;
`;
