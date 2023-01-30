import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import React from 'react';

export const Header = () => (
  <AppBar sx={{ zIndex: 3000 }}>
    <Toolbar>
      <IconButton sx={{ display: 'flex', justifyContent: 'start' }}>
        <MenuIcon sx={{ color: 'white' }} />
      </IconButton>
    </Toolbar>
  </AppBar>
);
