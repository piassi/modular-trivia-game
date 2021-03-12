import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { getAnswers, getTrivias } from '../game/ducks';
import Score from './components/Score';
import { AnsweredTrivia } from './types';

export function Container() {
  const trivias = useSelector(getTrivias);
  const answers = useSelector(getAnswers);
  const [score, setScore] = useState<AnsweredTrivia[]>([]);
  const [correctTriviasTotal, setCorrectTriviasTotal] = useState(0);

  if (!trivias.length && answers) {
    return <Redirect to="/" />;
  }

  if (!score.length) {
    let newCorrectTriviasTotal = 0;

    const calculatedScore = trivias.map<AnsweredTrivia>((trivia) => {
      const answeredRight = answers[trivia.id] === trivia.correctAnswer;

      if (answeredRight) {
        newCorrectTriviasTotal++;
      }

      return {
        ...trivia,
        answeredRight,
      };
    });

    setCorrectTriviasTotal(newCorrectTriviasTotal);

    setScore(calculatedScore);
  }

  return (
    <Score
      score={score}
      triviasTotal={trivias.length}
      correctTriviasTotal={correctTriviasTotal}
    />
  );
}
