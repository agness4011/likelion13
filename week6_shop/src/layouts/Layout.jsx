import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;