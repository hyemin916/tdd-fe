import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { Layout } from '@/components/Layout';
import Route from '@/routes';
import ThemeProvider from '@/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Route />
        <Layout />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;
