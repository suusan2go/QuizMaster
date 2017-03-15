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

function get(url: string, params: any = {}) {
  return axiosClient.get(url, params).then(response => response.data);
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

export function quizzes() {
  return get('/api/quizzes');
}

export function createQuiz(values: { title: string, description: string }) {
  return sendPost('/api/quizzes', { quiz: values });
}

export function updateQuiz(quizId: string, values: { title: string, description: string }) {
  return sendPatch(`/api/quizzes/${quizId}`, { quiz: values });
}

export function deleteQuiz(quizId: string) {
  return sendDelete(`/api/quizzes/${quizId}`);
}

export function myQuizzes() {
  return get('/api/user/quizzes');
}

export function myQuiz(id: string) {
  return get(`/api/user/quizzes/${id}`);
}

export function createQuestion(quizId: string, values: { content: string, answer_content: string}) {
  return sendPost(`/api/user/quizzes/${quizId}/questions`, { question: values });
}

export function updateQuestion(questionId: string, values: { content: string, answer_content: string}) {
  return sendPatch(`/api/user/questions/${questionId}`, { question: values });
}

export function deleteQuestion(questionId: string) {
  return sendDelete(`/api/user/questions/${questionId}`);
}

export function startQuizTrial(quizId: string) {
  return sendPost(`/api/quizzes/${quizId}/quiz_trials`, {});
}
