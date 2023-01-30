import './App.css';

import { Container, styled } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import Route from '@/routes';
import ThemeProvider from '@/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Route />
        <Header />
        <Offset />
        <Container>
          <Menu />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;
