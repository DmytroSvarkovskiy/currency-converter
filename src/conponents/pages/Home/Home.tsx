import { Container } from '../../Container/Container';
import { Casket, Title } from '../Home/Home.styled';

import { useAppDispatch, useAppSelector } from '../../../hooks';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentRate, rate, error } = useAppSelector(state => state.exchangeRate);
  const currency = Object.keys(rate);
  const course = Object.values(rate);

  const handleChange = (e: { target: any }) => {
    console.dir(e.target.value);
  };

  return (
    <section>
      <Container>
        <Casket>
          <Title>Current exchange rate</Title>
          <select name="currency" onChange={handleChange}>
            {currency.map(el => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </Casket>
      </Container>
    </section>
  );
};
