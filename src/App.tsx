import './App.css';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

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
        <AppBar position="static">
          <IconButton sx={{ display: 'flex', justifyContent: 'start' }}>
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
        </AppBar>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
