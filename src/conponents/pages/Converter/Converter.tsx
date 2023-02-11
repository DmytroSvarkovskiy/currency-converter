import { Container } from '../../Container/Container';
import { Casket } from '../Home/Home.styled';
import { useAppSelector } from '../../../hooks';
import {
  ConvertTitle,
  FlagConvert,
  WrapSelect,
  WrapMainContent,
  SelectConvert,
  InputConvert,
  ConvertIcon,
} from './Converter.styled';
import { useState } from 'react';
import { currencyListWithFlag } from '../../../currencyList';

const Converter: React.FC = () => {
  const { rate, currentRate } = useAppSelector(state => state.exchangeRate);
  const currency = Object.keys(rate);
  // const course = Object.values(rate);
  const [fromCurency, setFromCurrency] = useState(currentRate);
  const [toCurency, setToCurrency] = useState(currentRate);
  const [fromCount, setFromCount] = useState('');
  const [toCount, setToCount] = useState('');
  const currentIndexFor = currency.findIndex(el => el === fromCurency);
  const currentIndexTo = currency.findIndex(el => el === toCurency);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFromCurrency(e.target.value);
    setToCount(((rate[toCurency] / rate[e.target.value]) * +fromCount).toFixed(5).toString());
  };
  const handleToChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setToCurrency(e.target.value);
    setToCount(((rate[e.target.value] / rate[fromCurency]) * +fromCount).toFixed(5).toString());
  };

  const onForChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFromCount(e.target.value);
    setToCount(((rate[toCurency] / rate[fromCurency]) * +e.target.value).toFixed(5).toString());
  };
  const onToChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setToCount(e.target.value);
    setFromCount(((rate[fromCurency] / rate[toCurency]) * +e.target.value).toFixed(5).toString());
  };

  return (
    <section>
      <Container>
        <Casket>
          <ConvertTitle>Convert the required currency</ConvertTitle>
          <WrapMainContent>
            <WrapSelect>
              <p>From</p>
              {currentIndexFor !== -1 && (
                <FlagConvert src={currencyListWithFlag[currentIndexFor][fromCurency]} alt="flag" />
              )}

              <InputConvert
                type="number"
                placeholder="0"
                value={fromCount}
                onChange={onForChange}
              />
              <SelectConvert onChange={handleChange} value={fromCurency}>
                {currency.map(el => {
                  return (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  );
                })}
              </SelectConvert>
            </WrapSelect>
            <ConvertIcon />
            <WrapSelect>
              <p>To</p>
              {currentIndexTo !== -1 && (
                <FlagConvert src={currencyListWithFlag[currentIndexTo][toCurency]} alt="flag" />
              )}
              <InputConvert value={toCount} type="number" onChange={onToChange} placeholder="0" />{' '}
              <SelectConvert onChange={handleToChange} value={toCurency}>
                {currency.map(el => {
                  return (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  );
                })}
              </SelectConvert>
            </WrapSelect>
          </WrapMainContent>
        </Casket>
      </Container>
    </section>
  );
};
export default Converter;
