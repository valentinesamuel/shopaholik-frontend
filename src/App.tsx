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
import AdminHome from './routes/Admin/Home/AdminHome.component';
import AdminOrder from './routes/Admin/Order/AdminOrder.component';
import AdminSupplier from './routes/Admin/Supplier/AdminSupplier.component';
import RoleHome from './routes/RoleHome/RoleHome.component';
import CashierSale from './routes/Cashier/CashierSale.component';
import OrderDetails from './routes/Admin/Order/OrderDetails';
import MissingPage from './pages/404';
import { useAppSelector } from './Utils/StateDispatch';

function App() {
  const currentTheme = useAppSelector((state) => state.themeReducer.theme);
  console.log(currentTheme);

  const [mode, setMode] = useState<PaletteMode>(currentTheme as PaletteMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        console.log(mode);

        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [mode],
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<RoleHome />}>
            <Route path="/manager" element={<AdminHome />}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="inventory" element={<AdminInventory />} />
              <Route path="order" element={<AdminOrder />} />
              <Route path="order/:orderId" element={<OrderDetails />} />
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
              <Route path="sale" element={<CashierSale />} />
            </Route>
          </Route>
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
