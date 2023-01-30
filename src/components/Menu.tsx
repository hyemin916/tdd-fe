import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import React from 'react';

export const Menu = () => (
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
);
