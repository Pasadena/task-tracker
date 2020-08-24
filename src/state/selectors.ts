import {
  selector
} from 'recoil';

import { taskList } from './atoms';

export const getActiveTodos = selector({
  key: 'activeTodos',
  get: ({ get }) => {
    const todos = get(taskList);
    return todos.filter((todo: Todo) => !todo.completed_at);
  }
});
