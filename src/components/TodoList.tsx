import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { taskList } from '../state/atoms';

const Todos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(taskList);
  const toggleComplete = (todo: Todo) => {
    const updated = { ...todo, completed: !todo.completed };
    const index = todos.findIndex((item: Todo) => item.id === todo.id);
    const newList = [...todos.slice(0, index), updated, ...todos.slice(index + 1)];
    setTodos(newList);
  }

  return (
    <Todos>
      {todos.map((todo: Todo) => <Todo key={todo.id} todo={todo} onStatusChanged={toggleComplete}/>)}
    </Todos>
  )
}

const TodoLayout = styled.div`
  display: flex;
`;

const TodoName = styled.div`
  flex: 1;
`;

const TodoStatusCheckbox = styled.input`

`;

const Todo = ({ todo, onStatusChanged }: { todo: Todo, onStatusChanged: (todo: Todo) => void }) => (
  <TodoLayout>
    <TodoName>{todo.name}</TodoName>
    <TodoStatusCheckbox onChange={() => onStatusChanged(todo)} type="checkbox" checked={todo.completed}/>
  </TodoLayout>
)

export default TodoList;