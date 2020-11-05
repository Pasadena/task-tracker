import React from 'react';
import styled from 'styled-components';
import {
  RecoilRoot
} from 'recoil';

import './App.css';
import AppLayout from './components/AppLayout';
import Todos from './components/Todos';
import TodoModal from './components/TodoModal';
import Header from './components/Header';

import "react-datepicker/dist/react-datepicker.css";

import { DEVICE_SIZES } from './core/constants';

const AppRoot = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 58%, rgba(0,212,255,1) 100%);
  @media (min-width: ${DEVICE_SIZES.laptop}) { 
    min-height: 100%;
  }
`;

function App() {
  return (
    <RecoilRoot>
      <AppRoot>
        <AppLayout>
          <Header />
          <Todos />
          <TodoModal />
        </AppLayout>
      </AppRoot>
    </RecoilRoot>
  );
}

export default App;
