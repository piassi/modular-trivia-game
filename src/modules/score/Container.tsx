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

  if (!trivias.length && answers) {
    return <Redirect to="/" />;
  }

  if (!score.length) {
    const calculatedScore = trivias.map<AnsweredTrivia>((trivia) => {
      return {
        ...trivia,
        answeredRight: answers[trivia.id] === trivia.correctAnswer,
      };
    });

    setScore(calculatedScore);
  }

  return <Score score={score} />;
}
