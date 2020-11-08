import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import  { format } from 'date-fns';

import Todo from 'src/components/Todo';
import { Heading2, Paragraph } from 'src/components/Typography';

import { taskList } from 'src/state/atoms';
import { getTodosByState } from 'src/state/selectors';

import { toggleTodoStatus } from 'src/core/api';
import { DEVICE_SIZES, TODO_STATE } from 'src/core/constants';

const DATETIME_FORMAT = 'yyyy-mm-dd HH:mm:ss';

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
  const [allTodos, setTodos] = useRecoilState(taskList);
  const filteredTodos = useRecoilValue(getTodosByState(state));
  
  const changeStatus = React.useCallback(async (todo: Todo) => {
    const index = allTodos.findIndex((item: Todo) => item.id === todo.id);
    const toggled = {
      ...todo,
      completed_at: todo.completed_at === null ? format(new Date(), DATETIME_FORMAT) : null
    };
    const updated = await toggleTodoStatus(toggled);
    const newList = [...allTodos.slice(0, index), updated, ...allTodos.slice(index + 1)];
    setTodos(newList);
  }, [allTodos, setTodos]);

  return (
    <>
      <Heading2>{title}</Heading2>
      <Todos>
        {filteredTodos.map((todo: Todo) => <Todo key={todo.id} todo={todo} onStatusChanged={changeStatus}/>)}
        { filteredTodos.length === 0 && <Paragraph>Nothing going on here mate!</Paragraph>}
      </Todos>
    </>
  );
}

export default TodoList;