import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  & > * {
    padding: 1rem;
    max-width: 50%;
  }
`;

export default ({ children }: { children?: React.ReactNode }) => <Layout>{children}</Layout>