import { Trivia } from '../ducks';
import { HandleAnswerFunction } from '../types';

type Props = Trivia & {
  handleAnswer: HandleAnswerFunction;
};

export function TriviaCard(props: Props) {
  const { title, handleAnswer } = props;

  return (
    <div>
      <h2>{title}</h2>

      <button onClick={() => handleAnswer(true)}>True</button>
      <button onClick={() => handleAnswer(false)}>False</button>
    </div>
  );
}
