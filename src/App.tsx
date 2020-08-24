import React from 'react';
import styled from 'styled-components';
import {
  RecoilRoot
} from 'recoil';

import './App.css';
import AppLayout from './components/AppLayout';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

const AppRoot = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 58%, rgba(0,212,255,1) 100%);
`;

function App() {
  return (
    <RecoilRoot>
      <AppRoot>
        <AppLayout>
          <TodoForm />
          <Todos />
        </AppLayout>
      </AppRoot>
    </RecoilRoot>
  );
}

export default App;
