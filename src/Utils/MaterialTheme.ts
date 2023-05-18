import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#0193bb',
          },
          secondary: {
            main: '#f97c00',
          },
        }
      : {
          primary: {
            main: '#0193bb',
          },
          secondary: {
            main: '#f97c00',
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
