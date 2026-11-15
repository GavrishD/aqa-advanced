import './interceptors.js';
import axios from 'axios';

async function getComments() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');

  if (response.status !== 200) {
    throw new Error(`Expected status 200, but got ${response.status}`);
  }

  if (!response.data.every((comment) => comment.postId === 1)) {
    throw new Error('Not all comments belong to postId 1');
  }

  console.log('GET /comments?postId=1 test passed');
}

getComments();
