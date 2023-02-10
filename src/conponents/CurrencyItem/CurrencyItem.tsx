import { currencyListWithFlag } from '../../currencyList';
import { CurrencyLi, ImgFlag } from './CurrencyItem.styled';

type PropsItem = {
  i: number;
  item: string;
  course: number[];
  currentRate: string;
};
export const CurrencyItem: React.FC<PropsItem> = ({ i, item, course, currentRate }) => {
  return (
    <CurrencyLi key={i} id={item === currentRate ? 'active' : item}>
      <ImgFlag src={currencyListWithFlag[i][item]} alt="flag" />
      {item}&nbsp;:&nbsp;{course[i]}
    </CurrencyLi>
  );
};
