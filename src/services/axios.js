import axios from 'axios';
import config from '../config.js';

axios.defaults.baseURL = config.BASE_URL;

axios.interceptors.request.use(function (axios_config) {
  return axios_config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default axios