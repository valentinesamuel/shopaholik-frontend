import { PaletteMode, ThemeProvider, createTheme } from '@mui/material';

import { useMemo, useState } from 'react';
import { getDesignTokens } from './Utils/MaterialTheme';
import { ColorModeContext } from './Utils/ColorMode.context';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin.component';
import Home from './routes/Home/Home.component';
import ManagerHome from './routes/Manager/ManagerHome/ManagerHome.component';
import SupervisorHome from './routes/Supervisor/SupervisorHome.component';
import CashierHome from './routes/Cashier/CashierHome.component';
import ManagerDashboard from './routes/Manager/ManagerDashboard/ManagerDashboard.component';
import SupervisorDashboard from './routes/Supervisor/SupervisorDashboard.component';
import CashierDashboard from './routes/Cashier/CashierDashboard.component';
import ManagerInventory from './routes/Manager/ManagerInventory/ManagerInventory.component';
import ManagerOrder from './routes/Manager/ManagerOrder/ManagerOrder.component';
import ManagerSupplier from './routes/Manager/ManagerSupplier/ManagerSupplier.component';
import SupplierDetail from './routes/Manager/ManagerSupplier/SupplierDetail';

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
          <Route path="/" element={<Home />}>
            <Route path="/manager" element={<ManagerHome />}>
              <Route index element={<ManagerDashboard />} />
              <Route path="dashboard" element={<ManagerDashboard />} />
              <Route path="inventory" element={<ManagerInventory />} />
              <Route path="order" element={<ManagerOrder />} />
              <Route path="supplier" element={<ManagerSupplier />}/>
                <Route path="supplier/:supplierId" element={<SupplierDetail />} />
            </Route>
            <Route path="supervisor" element={<SupervisorHome />}>
              <Route index element={<SupervisorDashboard />} />
            </Route>
            <Route path="cashier" element={<CashierHome />}>
              <Route index element={<CashierDashboard />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <>
                <h1>not ready</h1>
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
