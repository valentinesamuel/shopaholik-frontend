import { FC } from 'react';
import DashboardMetric from '../../../components/DashboardMetric';
import { Box } from '@mui/material';
import { dashboardMetrics } from './metrics';
import StockQuantityCard from '../../../components/StockQuantityRow';
import TopSellingProduct from '../../../components/TopSellingProduct';
import Navbar from '../../../components/Navbar';

const ManagerDashboard: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        overflowX: 'auto',
        backgroundColor: 'primary.main',
        padding: '1% 3% 0% 3%',
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 30%))',
          justifyItems: 'stretch',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {dashboardMetrics.map((metric) => {
          return (
            <DashboardMetric
              color={metric.color}
              icon={metric.icon}
              title={metric.title}
              value={metric.value}
            />
          );
        })}
      </Box>
      <StockQuantityCard />
      <Box
        sx={{
          backgroundColor: 'secondary.light',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <h3 style={{ marginBottom: 20 }}>Best Selling Products</h3>

        <TopSellingProduct />
      </Box>
    </Box>
  );
};

export default ManagerDashboard;

ManagerDashboard.propTypes = {};
