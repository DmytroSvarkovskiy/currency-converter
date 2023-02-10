import styled from 'styled-components';
export const Casket = styled.div`
  width: 950px;
  height: 600px;
  padding: 15px;
  /* border: 1px solid #e9b7a7; */
  border-radius: 1.5em;
  margin: 60px auto;
  box-shadow: rgba(158, 120, 97, 0.24) 0px 3px 8px;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  color: #756059;
`;
export const ImgFlag = styled.img`
  width: 50px;
  height: 35px;
  margin-right: 10px;
`;
export const CurrencyList = styled.ul`
  display: flex;
  margin: 40px auto 0;
  font-weight: 500;
  font-size: 20px;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 40px;
  width: 600px;
  height: 420px;
  justify-content: center;
  align-items: center;
`;
export const CurrencyItem = styled.li`
  min-width: 210px;
  display: flex;
  align-items: center;
`;
