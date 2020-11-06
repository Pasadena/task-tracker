import React from 'react';
import styled from 'styled-components';
import { bounce } from '../core/styles/keyframes';

 const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
 `;

 const Letter = styled.span`
  font-size: 2rem;
  font-weight: normal;
  letter-spacing: 4px;
  text-transform: uppercase;
  animation-name: ${bounce};
  animation-duration: 2s;
  animation-iteration-count: infinite;
 `;

export default () => (
  <Container>
    {
    "Loading...".split('').map((letter: string, index: number) =>
      <Letter style={{ animationDelay: (index / 10) + 's'}}>{letter}</Letter>)
    }
  </Container>
);
