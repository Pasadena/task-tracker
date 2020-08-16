import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import { taskList, generateId } from '../state/atoms';
import { Heading2 } from './Typography';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    setTaskList((oldValue: Todo[]) => [...oldValue, { name, completed: false, id: generateId() }]);
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