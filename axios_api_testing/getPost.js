import './interceptors.js';
import axios from 'axios';

async function getPost() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

  if (response.status !== 200) {
    throw new Error(`Expected status 200, but got ${response.status}`);
  }

  if (response.data.id !== 1) {
    throw new Error(`Expected post id 1, but got ${response.data.id}`);
  }

  console.log('GET /posts/1 test passed');
}

getPost();
