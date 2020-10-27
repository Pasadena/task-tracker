import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import { taskList } from '../state/atoms';
import { fetchTodos } from '../core/api';

import TodoList from './TodoList';
import OpenModalButton from './OpenModalButton';
import { TODO_STATE } from 'src/core/constants';
import Loader from './Loader';

const TodosContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

const Todos = () => {
  const [loading, setLoading] = React.useState(false);
  const setTodos = useSetRecoilState(taskList);
  React.useEffect(() => {
    async function loadTodos() {
      const fetchedTodos = await fetchTodos();
      setTodos(fetchedTodos);
      setLoading(false);
    }
    setLoading(true);
    loadTodos();
  }, [setTodos]);

  return (
    <TodosContainer>
      <OpenModalButton />
      {
        loading
        ? <Loader />
        : <>
          <TodoList state={TODO_STATE.ACTIVE} title="Active tasks"/>
          <TodoList state={TODO_STATE.COMPLETED} title="Completed tasks"/>
        </>
      }
    </TodosContainer>
  );
}

export default Todos;