import React from 'react';
import styled from 'styled-components';
import { List } from 'styled-icons/feather';

import { Heading1 } from './Typography';

import { DEVICE_SIZES } from '../core/constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 4px;
  width: 100%;
  justify-content: space-evenly;
  background-color: #4b64bf;
  color: #ffff;
  box-sizing: border-box;
  @media (min-width: ${DEVICE_SIZES.laptop}) { 
    justify-content: center;
  }
`;

const HeaderIcon = styled(List)`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;
const Header = () => (
  <Container>
    <HeaderIcon />
    <Heading1>Task tracker</Heading1>
  </Container>
)


export default Header;