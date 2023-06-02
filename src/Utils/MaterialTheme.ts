import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({  
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#50BE9F',
          },
          secondary: {
            main: '#131039',
          },
        }
      : {
          primary: {
            main: '#217C62',
          },
          secondary: {
            main: '#131039',
          },
        }),
  },
  typography: {
    fontSize: 16,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
