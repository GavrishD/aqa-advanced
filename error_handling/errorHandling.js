// Task 1 — Error Handling

import axios from 'axios';

export async function getInvalidUrl() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/invalid-url');
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Resource not found', { cause: error });
    }

    throw error;
  }
}
