import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';

export const AppBar: React.FC = () => {
  return (
    <header>
      <Container>
        <nav>
          APP BAR
          <NavLink to="/">Exchange rate</NavLink>
          <NavLink to="/converter">Converter</NavLink>
        </nav>
      </Container>
    </header>
  );
};
