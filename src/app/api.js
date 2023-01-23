import axios from 'axios';
import {
  UNAUTHORIZED, NOT_FOUND, SERVER_ERROR, SERVICE_UNAVAILABLE,
} from '../constants';

// create an axios instance
const api = axios.create({
  baseURL: 'https://nft.urbandesignsco.com/api/',
});

// request interceptor
api.interceptors.request.use((request) => {
  // check if token exists
  const token = JSON.parse(localStorage.getItem('token'));

  if (token) {
    // set token to request header
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

// response interceptor
api.interceptors.response.use(
  (response) => Promise.resolve(response),

  (error) => {
    let promise;

    // check if request was cancelled
    if (axios.isCancel(error)) {
      // reject promise with error
      promise = Promise.reject(error);
    } else {
      // get error status
      const { status, data } = error.response;

      // handle errors
      switch (status) {
        case 0:
          promise = Promise.reject({
            type: 'app',
            content: SERVER_ERROR,
          });
          break;

        case 400:
          promise = Promise.reject({
            type: 'field',
            content: data.errors,
          });
          break;

        case 401:
          // check if request was not login
          if (!error.config.url.includes('login')) {
            localStorage.removeItem('token');
            location.href = '/login';

            promise = Promise.reject({
              type: 'app',
              content: UNAUTHORIZED,
            });
          } else {
            promise = Promise.reject({
              type: 'app',
              content: data.message,
            });
          }
          break;

        case 404:
          promise = Promise.reject({
            type: 'app',
            content: NOT_FOUND,
          });
          break;

        case 500:
          promise = Promise.reject({
            type: 'app',
            content: SERVER_ERROR,
          });
          break;

        case 503:
          promise = Promise.reject({
            type: 'app',
            content: SERVICE_UNAVAILABLE,
          });
          break;

        default:
          promise = Promise.reject({
            type: 'app',
            content: data.message,
          });
          break;
      }
    }

    return promise;
  },
);

export default api;
