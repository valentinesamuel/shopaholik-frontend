import { PaletteMode, ThemeProvider, createTheme } from '@mui/material';

import { useMemo, useState } from 'react';
import { getDesignTokens } from './Utils/MaterialTheme';
import { ColorModeContext } from './Utils/ColorMode.context';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin.component';
import AdminDashboard from './routes/Admin/Dashboard/AdminDashboard.component';
import AdminInventory from './routes/Admin/Inventory/AdminInventory.component';
import SupplierDetail from './routes/Admin/Supplier/SupplierDetail';
import ManagerPersonnel from './routes/Manager/ManagerPersonnel/ManagerPersonnel.component';
import SignOut from './pages/Signout.component';
import SignUp from './pages/Signup.component';
import AdminHome from './routes/Admin/Home/AdminHome.component';
import AdminOrder from './routes/Admin/Order/AdminOrder.component';
import AdminSupplier from './routes/Admin/Supplier/AdminSupplier.component';
import RoleHome from './routes/RoleHome/RoleHome.component';

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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup" element={<SignOut />} />
          <Route path="/" element={<RoleHome />}>
            <Route path="/manager" element={<AdminHome />}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="inventory" element={<AdminInventory />} />
              <Route path="order" element={<AdminOrder />} />
              <Route path="supplier" element={<AdminSupplier />} />
              <Route path="supplier/:supplierId" element={<SupplierDetail />} />
              <Route path="personnel" element={<ManagerPersonnel />} />
            </Route>
            <Route path="/supervisor" element={<AdminHome />}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="inventory" element={<AdminInventory />} />
            </Route>
            <Route path="/cashier" element={<AdminHome />}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="sale" element={<>cashier sale</>} />
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
