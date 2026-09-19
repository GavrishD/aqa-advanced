import './interceptors.js';
import axios from 'axios';

async function createPost() {
  const newPost = {
    title: 'My test post',
    body: 'This is a test post',
    userId: 1,
  };

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

  if (response.status !== 201) {
    throw new Error(`Expected status 201, but got ${response.status}`);
  }

  if (response.data.title !== newPost.title) {
    throw new Error(`Expected title "${newPost.title}", but got "${response.data.title}"`);
  }

  if (response.data.body !== newPost.body) {
    throw new Error(`Expected body "${newPost.body}", but got "${response.data.body}"`);
  }

  if (response.data.userId !== newPost.userId) {
    throw new Error(`Expected userId ${newPost.userId}, but got ${response.data.userId}`);
  }

  console.log('POST /posts test passed');
}

createPost();
