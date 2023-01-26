import { CssBaseline, useTheme } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { koKR } from '@mui/x-data-grid';
import type { ReactNode } from 'react';

import componentsOverrides from './components';
import palette from './palette';

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const theme = useTheme();
  const themeOptions = {
    palette,
    components: componentsOverrides(theme),
  };

  const customTheme = createTheme(themeOptions, koKR);

  return (
    <MUIThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
