import {
  atom
} from 'recoil';

export const taskList = atom<Todo[]>({
  key: 'taskList',
  default: []
});

export const todoModalVisibility = atom<boolean>({
  key: 'todoModalVisibility',
  default: false
});
