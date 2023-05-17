import { PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { useMemo, useState } from 'react';
import { getDesignTokens } from './Utils/MaterialTheme';
import { ColorModeContext } from './ColorMode.context';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Pages/Signin.component';
import Home from './routes/Home/Home.component';

function App() {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
