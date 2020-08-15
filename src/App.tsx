import React from 'react';
import styled from 'styled-components';
import {
  RecoilRoot
} from 'recoil';

import './App.css';
import AppLayout from './components/AppLayout';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const AppRoot = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <RecoilRoot>
      <AppRoot>
        <AppLayout>
          <TodoForm />
          <TodoList />
        </AppLayout>
      </AppRoot>
    </RecoilRoot>
  );
}

export default App;
