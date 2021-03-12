import { AnsweredTrivia } from '../types';
import { TriviaScoreRow } from './TriviaScoreRow';

type Props = {
  score: AnsweredTrivia[];
};

export default function Score(props: Props) {
  const { score } = props;

  return (
    <div>
      {score.map((answeredTrivia) => (
        <TriviaScoreRow {...answeredTrivia} />
      ))}
    </div>
  );
}
