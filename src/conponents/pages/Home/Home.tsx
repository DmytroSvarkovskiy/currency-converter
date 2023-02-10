import { Container } from '../../Container/Container';
import {
  Casket,
  Title,
  ImgFlag,
  CurrencyList,
  CurrencyItem,
  BaseCurrencyWrap,
} from '../Home/Home.styled';
import { currencyListWithFlag } from '../../../currencyList';
import { changeCurrentRate } from '../../../Redux/converter-slise';

import { useAppDispatch, useAppSelector } from '../../../hooks';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentRate, rate, error } = useAppSelector(state => state.exchangeRate);
  const currency = Object.keys(rate);
  const course = Object.values(rate);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(changeCurrentRate(e.target.value));
  };

  return (
    <section>
      <Container>
        <Casket>
          <Title>
            {error ? 'Something went wrong, please reload the page' : 'Current exchange rate'}
          </Title>
          {!error && (
            <BaseCurrencyWrap>
              <p>Base currency</p>
              <select name="currency" onChange={handleChange} value={currentRate}>
                {currency.map(el => {
                  return (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </BaseCurrencyWrap>
          )}
          <CurrencyList>
            {currency.map((item, i) => {
              return (
                <CurrencyItem key={i}>
                  <ImgFlag src={currencyListWithFlag[i][item]} alt="flag" />
                  {item}&nbsp;:&nbsp;{course[i]}
                </CurrencyItem>
              );
            })}
          </CurrencyList>
        </Casket>
      </Container>
    </section>
  );
};
