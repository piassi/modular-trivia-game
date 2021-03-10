import axios from 'axios';
import { Error } from '../store/ducks/errors';

export const reportError = async (error: Error) => {
  const { data } = await axios.post('https://mocked.api/report-error', {
    error: error.message,
  });

  return data;
};
