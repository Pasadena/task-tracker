import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import { taskList, generateId } from '../state/atoms';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    margin: 0.5rem;
  }
`;

const InputName = styled.input`

`;

const SubmitButton = styled.button`
`;

const TodoForm = ({}) => {
  const [name, setName] = React.useState('');
  const setTaskList = useSetRecoilState(taskList);

  const saveDisabled = () => name.length === 0;

  const saveTodo = (e: any) => {
    e.preventDefault();
    setTaskList((oldValue: Todo[]) => [...oldValue, { name, completed: false, id: generateId() }]);
    setName('');
  }
  return (
    <Form onSubmit={saveTodo}>
      <InputName onChange={e => setName(e.target.value)} />
      <SubmitButton type="submit" disabled={saveDisabled()}>Save</SubmitButton>
    </Form>
  );
}

export default TodoForm;