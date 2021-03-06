import React from 'react';
import styled from 'styled-components';

import { DEVICE_SIZES } from 'src/core/constants';

const Layout = styled.div`
  background-color: rgba(255, 255, 255, 0.97);
  border-radius: 4px;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: auto;
  width: 100%;
  @media (min-width: ${DEVICE_SIZES.laptop}) { 
    width: 50%;
  }
`;

export default ({ children }: { children?: React.ReactNode }) => <Layout>{children}</Layout>