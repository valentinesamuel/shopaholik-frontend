import { useMemo, useState } from 'react';
import { getDesignTokens } from './Utils/MaterialTheme';
import { ColorModeContext } from './Utils/ColorMode.context';
import { Route, Routes } from 'react-router-dom';
import {
  CircularProgress,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { lazy, Suspense } from 'react';

const SignIn = lazy(() => import('./pages/Signin.component'));
const AdminDashboard = lazy(
  () => import('./routes/Admin/Dashboard/AdminDashboard.component'),
);
const AdminInventory = lazy(
  () => import('./routes/Admin/Inventory/AdminInventory.component'),
);
const SupplierDetail = lazy(
  () => import('./routes/Admin/Supplier/SupplierDetail'),
);
const ManagerPersonnel = lazy(
  () => import('./routes/Manager/ManagerPersonnel/ManagerPersonnel.component'),
);
const AdminHome = lazy(() => import('./routes/Admin/Home/AdminHome.component'));
const AdminOrder = lazy(
  () => import('./routes/Admin/Order/AdminOrder.component'),
);
const AdminSupplier = lazy(
  () => import('./routes/Admin/Supplier/AdminSupplier.component'),
);
const RoleHome = lazy(() => import('./routes/RoleHome/RoleHome.component'));
const CashierSale = lazy(
  () => import('./routes/Cashier/CashierSale.component'),
);
const OrderDetails = lazy(() => import('./routes/Admin/Order/OrderDetails'));
import MissingPage from './pages/404';

function App() {
  const [mode, setMode] = useState<PaletteMode>('dark');

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
        <Suspense
          fallback={<CircularProgress color="primary" sx={{ mr: 2 }} />}
        >
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
                <Route
                  path="supplier/:supplier_id"
                  element={<SupplierDetail />}
                />
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
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
