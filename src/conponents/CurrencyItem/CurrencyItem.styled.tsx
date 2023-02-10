import styled from 'styled-components';
export const CurrencyLi = styled.li`
  min-width: 245px;
  padding: 2px 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: scale 0.4s;
  &#active {
    scale: 1.1;
    border-radius: 5px;
    box-shadow: rgba(104, 87, 76, 0.24) 0px 3px 8px;
  }
`;
export const ImgFlag = styled.img`
  width: 50px;
  height: 35px;
  margin-right: 10px;
  border-radius: 6px;
`;
