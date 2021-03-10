import axios from 'axios';
import { reportError } from './report-error';

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('report-error', () => {
  describe('reportError', () => {
    it('should call get request and return an error message object', async () => {
      const errorMock = {
        message: 'Error!',
      };
      axios.post.mockResolvedValue({ data: { message: errorMock.message } });
      const result = await reportError(errorMock);
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        'https://mocked.api/report-error',
        {
          error: errorMock.message,
        }
      );
      expect(result).toEqual(errorMock);
    });
  });
});
