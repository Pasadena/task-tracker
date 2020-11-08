import React from 'react';
import styled from 'styled-components';

import { DEVICE_SIZES } from 'src/core/constants';


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
  width: 30px;
  height: 30px;
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

export default Todo;
