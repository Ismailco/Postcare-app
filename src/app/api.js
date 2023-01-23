import axios from 'axios';
import {
  UNAUTHORIZED, NOT_FOUND, SERVER_ERROR, SERVICE_UNAVAILABLE,
} from '../constants';

const createError = (message, code, status, errors) => {
  const error = new Error();
  error.message = message;
  error.code = code;
  error.status = status;
  error.errors = errors;
  return `${error.message ? `${error.message} ` : ''}
    Details: ${error.errors ? JSON.stringify(errors) : ''}
    Code: ${error.code}
    Status: ${error.status}
    `;
}

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
          promise = Promise.reject(createError(SERVER_ERROR, 'server_error', 0, data.errors));
          break;

        case 400:
          promise = Promise.reject(createError(data.message, 'field_error', 400, data.errors));
          break;

        case 401:
          // check if request was not login
          if (!error.config.url.includes('login')) {
            localStorage.removeItem('token');
            window.location.href = '/login';

            promise = Promise.reject(createError(UNAUTHORIZED, 'unauthorized', 401, data.errors));
          } else {
            promise = Promise.reject(createError(data.message, 'unauthorized', 401, data.errors));
          }
          break;

        case 404:
          promise = Promise.reject(createError(NOT_FOUND, 'not_found', 404, data.errors));
          break;

        case 500:
          promise = Promise.reject(createError(SERVER_ERROR, 'server_error', 500, data.errors));
          break;

        case 503:
          promise = Promise.reject(createError(SERVICE_UNAVAILABLE, 'service_unavailable', 503, data.errors));
          break;

        default:
          promise = Promise.reject(createError(data.message, 'unknown_error', status, data.errors));
          break;
      }
    }

    return promise;
  },
);

export default api;
