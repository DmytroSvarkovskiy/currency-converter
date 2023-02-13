import { currencyListWithFlag } from '../../config';
import { CurrencyLi, ImgFlag, DivTitle } from './CurrencyItem.styled';
import { changeCurrentRate } from '../../redux';
import { useAppDispatch } from '../../hooks';

type PropsItem = {
  i: number;
  item: string;
  course: number[];
  currentRate: string;
};
export const CurrencyItem: React.FC<PropsItem> = ({ i, item, course, currentRate }) => {
  const dispatch = useAppDispatch();
  const onClick = (): void => {
    dispatch(changeCurrentRate(item));
  };

  return (
    <CurrencyLi key={i} id={item === currentRate ? 'active' : item} onClick={onClick}>
      <DivTitle>
        {' '}
        <ImgFlag src={currencyListWithFlag[i][item]} alt="flag" /> {item}&nbsp;:&nbsp;
        {course[i]}
      </DivTitle>
      <p>{currencyListWithFlag[i].title}</p>
    </CurrencyLi>
  );
};
