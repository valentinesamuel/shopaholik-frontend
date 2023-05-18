import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#D9DDFF',
          },
          secondary: {
            main: '#FFFEFC',
          },
        }
      : {
          primary: {
            main: '#6c78ff',
          },
          secondary: {
            main: '#ff9400',
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
