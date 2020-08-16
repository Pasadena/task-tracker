import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  width: 50vw;
  background-color: #ffff;
  border-radius: 4px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 4rem;
  & > * {
    padding: 1rem;
    max-width: 50%;
  }
`;

export default ({ children }: { children?: React.ReactNode }) => <Layout>{children}</Layout>