import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000/',
  // headers: 'application/json',
});

export default client;
