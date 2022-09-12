import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5522DA',
    },
    secondary: {
      main: '#990088',
    },
    error: {
      main: red.A400,
    },
  },
});
