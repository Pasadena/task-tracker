import React from 'react';
import styled, { keyframes } from 'styled-components';

 const bounce = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
 `;

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
