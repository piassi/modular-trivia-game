// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTrivias, getAnswers, getTrivias } from '../game/ducks';
// import Score from './components/Score';

export function Container() {
  // const dispatch = useDispatch();
  // const trivias = useSelector(getTrivias);
  // const answers = useSelector(getAnswers);
  // const [score, setScore] = useState([]);

  // useEffect(() => {
  //   dispatch(fetchTrivias());
  // }, [dispatch]);

  // if (trivias && answers) {
  //   const calculatedScore = trivias.map((trivia) => ({
  //     ...trivia,
  //     answeredRight: answers[trivia.id].answer === trivia.correctAnswer,
  //   }));

  //   setScore(calculatedScore);
  // }

  return <p>Score</p>;
}
