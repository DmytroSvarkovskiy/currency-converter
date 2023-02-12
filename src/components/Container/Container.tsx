import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 320px) {
    max-width: 320px;
  }
  @media (min-width: 375px) {
    max-width: 375px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;
