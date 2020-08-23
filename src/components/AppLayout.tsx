import React from 'react';
import styled from 'styled-components';

import { DEVICE_SIZES } from '../core/constants';

const Layout = styled.div`
  background-color: rgba(255, 255, 255, 0.97);
  border-radius: 4px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 4rem;
  width: 95%;
  @media (min-width: ${DEVICE_SIZES.laptop}) { 
    width: 50%;
  }
`;

export default ({ children }: { children?: React.ReactNode }) => <Layout>{children}</Layout>