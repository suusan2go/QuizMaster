// @flow
import axios from 'axios';
import authenticityToken from './authenticityToken';

const axiosClient = axios.create({
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config: Object) => {
    config.headers['X-CSRF-TOKEN'] = authenticityToken();  // eslint-disable-line
    return config;
  },
  error => Promise.reject(error),
);

function get(url: string) {
  return axiosClient.get(url).then(response => response.data);
}

function sendDelete(url: string) {
  return axiosClient.delete(url).then(response => response.data);
}

function sendPatch(url: string, data: Object) {
  return axiosClient.patch(url, data).then(response => response.data);
}

function sendPost(url: string, data: Object) {
  return axiosClient.post(url, data).then(response => response.data);
}

export function createQuiz(values: { title: string, description: string }) {
  return sendPost('/api/quizzes', { quiz: values });
}
