import { Container, styled } from '@mui/material';
import React from 'react';

import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Layout = () => (
  <>
    <Header />
    <Offset />
    <Container>
      <Menu />
    </Container>
  </>
);
