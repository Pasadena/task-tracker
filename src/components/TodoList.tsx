import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { taskList } from '../state/atoms';

import { Heading2, Paragraph } from './Typography';

import { fetchTodos } from '../core/api';

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

  React.useEffect(() => {
    async function loadTodos() {
      const fetchedTodos = await fetchTodos();
      setTodos(fetchedTodos);
    }
    loadTodos();
  }, [setTodos]);

  return (
    <Todos>
      <Heading2>Active tasks:</Heading2>
      {todos.map((todo: Todo) => <Todo key={todo.id} todo={todo} onStatusChanged={toggleComplete}/>)}
      { todos.length === 0 && <Paragraph>No active tasks \o/</Paragraph>}
    </Todos>
  )
}

const TodoLayout = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #EDECEC;
  border-radius: 2px;
  min-width: 300px;
  background-color: #F7F7F7;
  box-shadow: 1px 1px 2px #EB7FA3;
`;

const TodoInfo = styled.div`
  flex: 1;
`;

const StatusContainer =  styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoName = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  flex: 1;
`;

const CreatedAt = styled.div`
  font-size: 0.6rem;
  padding-left: 0.5rem;
  padding-top: 1rem;
`;

const TodoStatusCheckbox = styled.input`
  width: 20px;
  height: 20px;
`;

const Todo = ({ todo, onStatusChanged }: { todo: Todo, onStatusChanged: (todo: Todo) => void }) => (
  <TodoLayout>
    <TodoInfo>
      <TodoName>{todo.name}</TodoName>
      {todo.createdAt && <CreatedAt>{todo.createdAt}</CreatedAt>}
    </TodoInfo>
    <StatusContainer>
      <TodoStatusCheckbox onChange={() => onStatusChanged(todo)} type="checkbox" checked={todo.completed}/>
    </StatusContainer>
  </TodoLayout>
)

export default TodoList;