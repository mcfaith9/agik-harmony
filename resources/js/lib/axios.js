import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://agik.harmony.test/',
  // important for session cookies
  withCredentials: true,
});

export default instance;