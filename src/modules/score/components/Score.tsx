import { AnsweredTrivia } from '../types';
import { TriviaScoreRow } from './TriviaScoreRow';

type Props = {
  score: AnsweredTrivia[];
  triviasTotal: number;
  correctTriviasTotal: number;
};

export default function Score(props: Props) {
  const { score, correctTriviasTotal, triviasTotal } = props;

  return (
    <div>
      <h1 className="text-center h3 mb-5">
        You scored
        <br /> {correctTriviasTotal}/{triviasTotal}
      </h1>

      {score.map((answeredTrivia) => (
        <TriviaScoreRow {...answeredTrivia} />
      ))}
    </div>
  );
}
