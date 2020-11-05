import React from 'react';
import styled, { css } from 'styled-components';
import { ArrowLeft, X } from 'styled-icons/feather';
import DatePicker, { registerLocale } from 'react-datepicker';
import fi from 'date-fns/locale/fi';
import  { format } from 'date-fns';

import { useSetRecoilState, useRecoilValue } from 'recoil';

import { taskList, todoModalVisibility } from '../state/atoms';
import { Heading3 } from './Typography';
import { createTodo } from '../core/api';

import { DEVICE_SIZES } from '../core/constants';

registerLocale(fi);

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  opacity: 1;
  transition: opacity .2s ease;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.97);
  border-radius: 4px;
  @media (min-width: ${DEVICE_SIZES.laptop}) { 
    width: 50vw;
    height: 70vh;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  & > * {
    margin: 0.5rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const InputName = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 2px;
  outline: none;
  &:focus {
    box-shadow: 1px 1px 2px #807e78;
  }
`;

const StyledDatePicker = styled(DatePicker).attrs(props => ({ className: props.className }))`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 2px;
  & .container {
    border: 5px solid red;
  }
`;
const SubmitButton = styled.button`
  padding: 0.5rem;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  background-color: #807e78;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(128, 126, 120);
  color: white;
  justify-content: center;
  position: relative;
`;

const modalIcon = css`
  position: absolute;
  width: 30px;
  height: 30px;
  font-weight: 600;
`;

const BackArrow = styled(ArrowLeft)`
  ${modalIcon}
  margin-left: 1rem;
  left: 0;
  @media (min-width: ${DEVICE_SIZES.laptop}) { 
    display: none;
  }
`;

const CloseIcon = styled(X)`
  ${modalIcon}
  margin-right: 1rem;
  right: 0;
  display: none;
  @media (min-width: ${DEVICE_SIZES.laptop}) { 
    display: unset;
  }
`;

const TodoModal = () => {

  const [name, setName] = React.useState('');
  const [dueDate, setDueDate] = React.useState(null);
  const modalVisible = useRecoilValue(todoModalVisibility);
  const setModalVisible = useSetRecoilState(todoModalVisibility);

  const setTaskList = useSetRecoilState(taskList);

  const saveDisabled = () => name.length === 0;

  const saveTodo = async (e: any) => {
    e.preventDefault();
    const newTodo = { name, dueDate: dueDate ? format(dueDate, 'yyyy-MM-dd') : null };
    try {
      const savedTodo = await createTodo(newTodo);
      setTaskList((oldValue: Todo[]) => [...oldValue, savedTodo]);
      setName('');
      setModalVisible(false);
    } catch (e) {
      console.log('Cannot save todo', e);
    }
  }

  if (!modalVisible) {
    return null;
  }

  return (
    <Overlay>
      <Modal>
        <TitleBar>
          <BackArrow onClick={() => setModalVisible(false)}/>
          <Heading3>Create a new todo</Heading3>
          <CloseIcon onClick={() => setModalVisible(false)}/>
        </TitleBar>
        <Form onSubmit={saveTodo}>
          <InputContainer>
            <InputLabel>Name</InputLabel>
            <InputName onChange={e => setName(e.target.value)}/>
          </InputContainer>
          <InputContainer>
            <InputLabel>Due date: </InputLabel>
            <StyledDatePicker
              selected={dueDate}
              onChange={date => setDueDate(date)}
              dateFormat="dd.MM.yyyy"
              withPortal
              className="container"/>
          </InputContainer>
          <SubmitButton type="submit" disabled={saveDisabled()}>Save</SubmitButton>
        </Form>
      </Modal>
    </Overlay>
  );  
}

export default TodoModal;