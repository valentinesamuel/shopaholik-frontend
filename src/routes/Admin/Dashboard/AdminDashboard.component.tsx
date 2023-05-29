import { FC } from 'react';
import DashboardMetric from '../../../components/DashboardMetric';
import { Paper } from '@mui/material';
import { dashboardMetrics } from '../../../Utils/metrics';
import StockQuantityCard from '../../../components/StockQuantityRow';
import TopSellingProduct from './TopSellingProduct';

const AdminDashboard: FC = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        // height: '100vh',
        overflowX: 'auto',
        padding: '1% 3% 3% 3%',
      }}
    >
      <Paper
        elevation={1}
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            mobile: 'repeat(auto-fit, minmax(100%, 30%))',
            tablet: 'repeat(auto-fit, minmax(100%, 30%))',
            desktop: 'repeat(auto-fit, minmax(300px, 30%))',
          },
          justifyItems: 'stretch',
          justifyContent: 'space-between',
          rowGap: '1rem',
          padding: 3,
        }}
      >
        {dashboardMetrics.map((metric) => {
          return (
            <DashboardMetric
              key={metric.id}
              color={metric.color}
              icon={metric.icon}
              title={metric.title}
              value={metric.value}
            />
          );
        })}
      </Paper>
      <StockQuantityCard />
      <Paper
        elevation={2}
        sx={{
          padding: 3,
          borderRadius: 2,
        }}
      >
        <h3 style={{ marginBottom: 20 }}>Best Selling Products</h3>
        <TopSellingProduct />
      </Paper>
    </Paper>
  );
};

export default AdminDashboard;
