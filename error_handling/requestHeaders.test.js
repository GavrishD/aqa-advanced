import { getPostsWithParams } from './requestHeaders.js';
import axios from 'axios';
import { jest } from '@jest/globals';

axios.get = jest.fn();

test('should include custom headers and params in request', async () => {
  axios.get.mockResolvedValue({
    data: [],
    status: 200,
  });

  await getPostsWithParams();

  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'X-Custom-Header': 'test-value',
    },
    params: {
      userId: 1,
    },
  });
});
