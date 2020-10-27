import {
  selector,
  selectorFamily
} from 'recoil';

import { TODO_STATE } from '../core/constants';

import { taskList } from './atoms';

export const getActiveTodos = selector({
  key: 'activeTodos',
  get: ({ get }) => {
    const todos = get(taskList);
    return todos.filter((todo: Todo) => !todo.completed_at);
  }
});

export const getTodosByState = selectorFamily({
  key: 'todosByState',
  get: (state: TODO_STATE) => ({ get }) => {
    const todos = get(taskList);
    return todos.filter((todo: Todo) =>
      state === TODO_STATE.ACTIVE ? !todo.completed_at : !!todo.completed_at);
  }
});
