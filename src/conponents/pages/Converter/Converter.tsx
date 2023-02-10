import { Container } from '../../Container/Container';
import { Casket } from '../Home/Home.styled';
import { useAppSelector } from '../../../hooks';
import { ConvertTitle } from './Converter.styled';
import { useState } from 'react';
import { currencyListWithFlag } from '../../../currencyList';

const Converter: React.FC = () => {
  const { rate, currentRate } = useAppSelector(state => state.exchangeRate);
  const currency = Object.keys(rate);
  // const course = Object.values(rate);
  const [forCurency, setForCurrency] = useState(currentRate);
  const [toCurency, setToCurrency] = useState(currentRate);
  const currentIndexFor = currency.findIndex(el => el === forCurency);
  const currentIndexTo = currency.findIndex(el => el === toCurency);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setForCurrency(e.target.value);
  };
  const handleToChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setToCurrency(e.target.value);
  };
  return (
    <section>
      <Container>
        <Casket>
          <ConvertTitle>Convert the required currency</ConvertTitle>
          <img src={currencyListWithFlag[currentIndexFor][forCurency]} alt="flag" />{' '}
          <select onChange={handleChange} value={forCurency}>
            {currency.map(el => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
          <input type="number" />
          <input type="number" />{' '}
          <select onChange={handleToChange} value={toCurency}>
            {currency.map(el => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
          <img src={currencyListWithFlag[currentIndexTo][toCurency]} alt="flag" />{' '}
        </Casket>
      </Container>
    </section>
  );
};
export default Converter;
