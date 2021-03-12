import { AnsweredTrivia } from '../types';

export function TriviaScoreRow(props: AnsweredTrivia) {
  const { category, answeredRight, question } = props;

  return (
    <div>
      {category} <br />
      <p dangerouslySetInnerHTML={{ __html: question }} />
      {answeredRight ? 'You got it' : 'Sorry dude, you missed'}
    </div>
  );
}
