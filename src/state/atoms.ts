import {
  atom
} from 'recoil';

let id = 0;
export const generateId = () => {
  id++;
  return "" + id;
}


export const taskList = atom<Todo[]>({
  key: 'taskList',
  default: []
});
