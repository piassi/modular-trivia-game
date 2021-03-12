import axios from 'axios';

export const getTrivias = async () => {
  const { data } = await axios.post('https://mocked.api/trivias/get-all');
  return data;
};
