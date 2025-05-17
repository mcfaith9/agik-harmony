import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
  // important for session cookies
  withCredentials: true,
});

export default instance;