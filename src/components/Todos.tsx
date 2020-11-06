import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import { taskList } from 'src/state/atoms';
import { fetchTodos } from 'src/core/api';
import { TODO_STATE } from 'src/core/constants';

import TodoList from 'src/components/TodoList';
import OpenModalButton from 'src/components/OpenModalButton';
import Loader from 'src/components/Loader';

const TodosContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

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
        ? <LoaderContainer><Loader /></LoaderContainer>
        : <>
          <TodoList state={TODO_STATE.ACTIVE} title="Active tasks"/>
          <TodoList state={TODO_STATE.COMPLETED} title="Completed tasks"/>
        </>
      }
    </TodosContainer>
  );
}

export default Todos;