import { FC } from 'react';
import DashboardMetric from '../../../components/DashboardMetric';
import { Paper } from '@mui/material';
import StockQuantityCard from '../../../components/StockQuantityRow';
import DashboardTopSellingProduct from './DashboardTopSellingProduct';

const AdminDashboard: FC = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        overflowX: 'auto',
        padding: '1% 3% 3% 3%',
      }}
    >
      <DashboardMetric />
      <StockQuantityCard />
      <Paper
        elevation={2}
        sx={{
          padding: 3,
          borderRadius: 2,
        }}
      >
        <h3 style={{ marginBottom: 20 }}>Best Selling Products</h3>
        <DashboardTopSellingProduct />
      </Paper>
    </Paper>
  );
};

export default AdminDashboard;
