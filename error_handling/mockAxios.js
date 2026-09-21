// Task 3 - Mocking Axios

import axios from 'axios';

export async function getUser() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user', { cause: error });
  }
}
