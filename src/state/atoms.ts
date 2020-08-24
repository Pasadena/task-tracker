import {
  atom
} from 'recoil';

export const taskList = atom<Todo[]>({
  key: 'taskList',
  default: []
});
