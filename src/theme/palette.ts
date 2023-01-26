import type { PaletteColorOptions, PaletteOptions, TypeText } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypeBackground {
    dark: string;
  }

  interface TypeAction {
    darkHover: string;
  }

  interface Palette {
    border: '#DDDDE8';
  }

  interface PaletteOptions {
    border: '#DDDDE8';
  }
}
const PRIMARY: PaletteColorOptions = {
  main: '#0062CC',
  light: '#37D2E2',
  contrastText: '#FFFFFF',
} as const;

const ERROR: PaletteColorOptions = {
  main: '#E91F27',
} as const;

const TEXT: Partial<TypeText> = {
  primary: '#141414',
};

const palette: Readonly<PaletteOptions> = {
  border: '#DDDDE8',
  common: { black: '#141414', white: '#FFFFFF' },
  text: { ...TEXT },
  primary: { ...PRIMARY },
  error: { ...ERROR },
  background: { default: '#F7F7FA', dark: '#657386' },
  action: { darkHover: '#465060' },
} as const;

export default palette;
