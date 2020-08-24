import axios from 'axios';

function headerConfig(method) {
  return {
    method,
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8'
    }
  };
}

const API_URL = process.env.REACT_APP_API_URL;

export const createTodo = (todo: Todo) => axios.post(`${API_URL}/task-tracker`, JSON.stringify(todo), headerConfig('post'));

export const fetchTodos = () =>
  axios.get(`${API_URL}/task-tracker`, headerConfig('get'))
  .then(res => res.data);

export const completeTodo = (id: string) =>
  axios.put(`${API_URL}/task-tracker`, JSON.stringify({ id }), headerConfig('put'))
  .then(res => res.data);
