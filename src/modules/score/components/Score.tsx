import Button from 'react-bootstrap/Button';
import { AnsweredTrivia } from '../types';
import { TriviaScoreRow } from './TriviaScoreRow';

type Props = {
  score: AnsweredTrivia[];
  triviasTotal: number;
  correctTriviasTotal: number;
  startGameReset: () => void;
};

export default function Score(props: Props) {
  const { score, correctTriviasTotal, triviasTotal, startGameReset } = props;

  return (
    <div>
      <h1 className="text-center h3 mb-5">
        You scored
        <br /> {correctTriviasTotal}/{triviasTotal}
      </h1>

      {score.map((answeredTrivia) => (
        <TriviaScoreRow key={answeredTrivia.id} {...answeredTrivia} />
      ))}

      <div className="d-flex justify-content-center mt-4">
        <Button onClick={() => startGameReset()} size="lg">
          Play Again?
        </Button>
      </div>
    </div>
  );
}
