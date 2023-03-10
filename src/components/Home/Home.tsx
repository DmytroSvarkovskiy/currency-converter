import { Container, CurrencyItem } from '../';
import { Casket, Title, CurrencyList, BaseCurrencyWrap, Select } from './Home.styled';
import { changeCurrentRate } from '../../redux';
import { useAppDispatch, useAppSelector } from '../../hooks';

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
              <p>Select base currency</p>
              <Select onChange={handleChange} value={currentRate}>
                {currency.map(el => {
                  return (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  );
                })}
              </Select>
            </BaseCurrencyWrap>
          )}
          <CurrencyList>
            {currency.map((item, i) => {
              return (
                <CurrencyItem
                  key={item}
                  item={item}
                  i={i}
                  course={course}
                  currentRate={currentRate}
                />
              );
            })}
          </CurrencyList>
        </Casket>
      </Container>
    </section>
  );
};
