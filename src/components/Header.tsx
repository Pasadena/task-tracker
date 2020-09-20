import React from 'react';
import styled from 'styled-components';
import { CheckCircle } from 'styled-icons/feather';

import { Heading1 } from './Typography';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 4px;
  width: 100%;
  justify-content: center;
  background-color: #4b64bf;
  color: #ffff;
  box-sizing: border-box;
`;

const HeaderIcon = styled(CheckCircle)`
  width: 70px;
  height: 70px;
  margin-right: 2rem;
`;
const Header = () => (
  <Container>
    <HeaderIcon />
    <Heading1>Task tracker</Heading1>
  </Container>
)


export default Header;