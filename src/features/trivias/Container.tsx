import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Main } from './components/Main';
import { fetchTrivias, getTrivias } from './ducks';

export function Container() {
  const dispatch = useDispatch();
  const trivias = useSelector(getTrivias);

  useEffect(() => {
    dispatch(fetchTrivias());
  }, [dispatch]);

  return (
    <div>
      <Main trivias={trivias} />
    </div>
  );
}
