import { Container } from '../index';
import { Nav, Link, CurrencyIcon, ConvertIcon } from './AppBar.styled';
import { useAppSelector } from '../../hooks';
export const AppBar: React.FC = () => {
  const { error } = useAppSelector(state => state.exchangeRate);

  return (
    <header>
      <Container>
        <Nav>
          <Link to="/">
            {' '}
            <CurrencyIcon />
            Exchange rate
          </Link>
          {!error && (
            <Link to="/converter">
              <ConvertIcon />
              Converter
            </Link>
          )}
        </Nav>
      </Container>
    </header>
  );
};
