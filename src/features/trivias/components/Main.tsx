import { Trivia } from '../ducks';
import { TriviaCard } from './TriviaCard';

type Props = {
  trivias: Trivia[];
};

export function Main(props: Props) {
  const { trivias } = props;

  return (
    <div>
      {trivias.map((trivia) => (
        <TriviaCard key={trivia.id} {...trivia} />
      ))}
    </div>
  );
}
