import { Container } from '../Container/Container';
import { Nav, Link, CurrencyIcon, ConvertIcon } from './AppBar.styled';
export const AppBar: React.FC = () => {
  return (
    <header>
      <Container>
        <Nav>
          <Link to="/">
            {' '}
            <CurrencyIcon />
            Exchange rate
          </Link>

          <Link to="/converter">
            <ConvertIcon />
            Converter
          </Link>
        </Nav>
      </Container>
    </header>
  );
};
