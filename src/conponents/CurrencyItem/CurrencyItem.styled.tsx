import styled from 'styled-components';

export const CurrencyLi = styled.li`
  min-width: 245px;
  padding: 2px 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: scale 0.4s;
  &:hover {
    scale: 1.1;
    border-radius: 7px;
    box-shadow: rgba(104, 87, 76, 0.24) 0px 3px 8px;
  }
  &#active {
    scale: 1.1;
    border-radius: 7px;
    box-shadow: rgba(104, 87, 76, 0.24) 0px 3px 8px;
    outline: 1px solid #d3b7ae;
  }
`;
export const ImgFlag = styled.img`
  width: 50px;
  height: 35px;
  margin-right: 10px;
  border-radius: 6px;
  border: 1px solid #756059;
`;
