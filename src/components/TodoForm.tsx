import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import { taskList } from '../state/atoms';
import { Heading2 } from './Typography';
import { createTodo } from '../core/api';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  padding: 1rem;
`;

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
    const newTodo = { name };
    createTodo(newTodo);
    setTaskList((oldValue: Todo[]) => [...oldValue, newTodo]);
    setName('');
  }
  return (
    <FormContainer>
      <Heading2>Track task:</Heading2>
      <Form onSubmit={saveTodo}>
        <InputName onChange={e => setName(e.target.value)} />
        <SubmitButton type="submit" disabled={saveDisabled()}>Save</SubmitButton>
      </Form>
    </FormContainer>
  );
}

export default TodoForm;