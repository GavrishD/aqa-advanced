import axios from 'axios';

axios.interceptors.request.use((request) => {
  console.log(`Request: ${request.method.toUpperCase()} ${request.url}`);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log(`Response status: ${response.status}`);
  return response;
});
