// Task 2 — Testing Request Headers and Params

import axios from 'axios';

export async function getPostsWithParams() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'X-Custom-Header': 'test-value',
    },
    params: {
      userId: 1,
    },
  });

  return response;
}
