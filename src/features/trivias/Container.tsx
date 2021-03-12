import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Game from './components/Game';
import { Welcome } from './components/Welcome';
import { fetchTrivias, getTrivias } from './ducks';
import { HandleAnswerFunction } from './types';

export function Container() {
  const dispatch = useDispatch();
  const [currentTriviaIndex, setCurrentTriviaIndex] = useState(0);
  const trivias = useSelector(getTrivias);

  const startGame = (): void => {
    dispatch(fetchTrivias());
  };

  const handleAnswer: HandleAnswerFunction = (answer: boolean) => {
    setCurrentTriviaIndex((currentIndex) => currentIndex + 1);
  };

  if (trivias.length && currentTriviaIndex + 1 >= trivias.length) {
    return <Redirect to="/score" />;
  }

  return trivias.length ? (
    <Game
      currentTrivia={trivias[currentTriviaIndex]}
      handleAnswer={handleAnswer}
      triviasTotal={trivias.length}
      currentTriviaIndex={currentTriviaIndex}
    />
  ) : (
    <Welcome startGame={startGame} />
  );
}
