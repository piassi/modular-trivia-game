import axios from 'axios';
import { Trivia } from './types';

type TriviaRequest = {
  category: string;
  question: string;
  correct_answer: boolean;
};

export const getTrivias = async () => {
  const { data } = await axios.get(
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
  );

  if (!data.results) {
    throw new Error('Something went wrong');
  }

  const trivias: Trivia[] = data.results.map(
    ({ category, question, correct_answer }: TriviaRequest, index: number) => ({
      category,
      question,
      id: index,
      correctAnswer: correct_answer,
    })
  );

  return trivias;
};
