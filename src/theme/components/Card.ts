import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Card = (): Components<Omit<Theme, 'components'>> => ({
  MuiCard: {
    styleOverrides: {
      root: ({ ownerState, theme }) =>
        ownerState.variant === 'outlined' && { border: `1px solid ${theme.palette.border}` },
    },
  },
});

export default Card;
