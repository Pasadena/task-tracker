import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { taskList } from '../state/atoms';
import { getTodosByState } from '../state/selectors';

import { Heading2, Paragraph } from './Typography';

import { toggleTodoStatus } from '../core/api';

import { DEVICE_SIZES, TODO_STATE } from '../core/constants';

const TodoListContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

const Todos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  @media (min-width: ${DEVICE_SIZES.laptop}) { 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

interface TodoListProps {
  state: TODO_STATE;
  title: string;
}

const TodoList = ({state, title}: TodoListProps) => {
  const setTodos = useSetRecoilState(taskList);
  const filteredTodos = useRecoilValue(getTodosByState(state));
  
  const changeStatus = React.useCallback(async (todo: Todo) => {
    const index = filteredTodos.findIndex((item: Todo) => item.id === todo.id);
    const updated = await toggleTodoStatus(todo.id);
    const newList = [...filteredTodos.slice(0, index), updated, ...filteredTodos.slice(index + 1)];
    setTodos(newList);
  }, [filteredTodos, setTodos]);

  return (
    <TodoListContainer>
      <Heading2>{title}</Heading2>
      <Todos>
        {filteredTodos.map((todo: Todo) => <Todo key={todo.id} todo={todo} onStatusChanged={changeStatus}/>)}
        { filteredTodos.length === 0 && <Paragraph>Nothing going on here mate!</Paragraph>}
      </Todos>
    </TodoListContainer>
  );
}

const TodoLayout = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #EDECEC;
  border-radius: 2px;
  background-color: #F7F7F7;
  box-shadow: 1px 1px 2px #EB7FA3;
  margin-bottom: 1rem;
  @media (min-width: ${DEVICE_SIZES.laptop}) { 
    width: 40%;
  }
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
      <TodoStatusCheckbox onChange={() => onStatusChanged(todo)} type="checkbox" checked={!!todo.completed_at}/>
    </StatusContainer>
  </TodoLayout>
)

export default TodoList;