import { HandleAnswerFunction, Trivia } from '../types';
import { TriviaCard } from './TriviaCard';

type Props = {
  currentTrivia: Trivia;
  currentTriviaIndex: number;
  handleAnswer: HandleAnswerFunction;
  triviasTotal: number;
};

export default function Game(props: Props) {
  const {
    currentTrivia,
    handleAnswer,
    currentTriviaIndex,
    triviasTotal,
  } = props;

  return (
    <div>
      <TriviaCard {...currentTrivia} handleAnswer={handleAnswer} />

      <p>
        {currentTriviaIndex + 1} of {triviasTotal}
      </p>
    </div>
  );
}
