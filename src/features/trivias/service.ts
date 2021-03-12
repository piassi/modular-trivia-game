import axios from 'axios';

export const getTrivias = async () => {
  const { data } = await axios.get('https://mocked.api/trivias/get-all');
  return data;
};
