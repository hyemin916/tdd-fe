import './App.css';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, Drawer, IconButton, styled, Toolbar } from '@mui/material';
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

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Route />
        <AppBar sx={{ zIndex: 3000 }}>
          <Toolbar>
            <IconButton sx={{ display: 'flex', justifyContent: 'start' }}>
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Offset />
        <Container>
          <Drawer anchor="left" open={true} variant="persistent">
            <Toolbar />
            <div>test</div>
          </Drawer>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;
