import { HandleAnswerFunction, Trivia } from '../types';

type Props = Trivia & {
  handleAnswer: HandleAnswerFunction;
};

export function TriviaCard(props: Props) {
  const { category, question, handleAnswer } = props;

  return (
    <div>
      <h2>{category}</h2>
      <p dangerouslySetInnerHTML={{ __html: question }} />

      <button onClick={() => handleAnswer(true)}>True</button>
      <button onClick={() => handleAnswer(false)}>False</button>
    </div>
  );
}
