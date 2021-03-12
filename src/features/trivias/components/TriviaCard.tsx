import { Trivia } from '../ducks';

export function TriviaCard(props: Trivia) {
  const { title } = props;

  return <h2>{title}</h2>;
}
