import './App.css';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
} from '@mui/material';
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
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AddCircleOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary="상품 등록" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;
