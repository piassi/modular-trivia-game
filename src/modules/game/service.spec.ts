import axios from 'axios';
import { getTrivias } from './service';

describe('service', () => {
  it('should call api and return Trivias array', async () => {
    const results = [
      {
        category: 'General Knowledge',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'Science: Mathematics',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'The binary number &quot;101001101&quot; is equivalent to the Decimal number &quot;334&quot;',
        correct_answer: 'False',
        incorrect_answers: ['True'],
      },
    ];

    const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        results,
      },
    });
    const result = await getTrivias();
    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual([
      {
        id: 0,
        category: results[0].category,
        question: results[0].question,
        correctAnswer: true,
      },
      {
        id: 1,
        category: results[1].category,
        question: results[1].question,
        correctAnswer: false,
      },
    ]);
  });
});
