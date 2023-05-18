import { FC } from 'react';
import DashboardMetric from '../../../components/DashboardMetric';
import { Box } from '@mui/material';
import { dashboardMetrics } from './metrics';
import StockQuantityCard from '../../../components/StockQuantityRow';
import TopSellingProduct from '../../../components/TopSellingProduct';

const ManagerDashboard: FC = () => {
  return (
    <div style={{ width: '100%', backgroundColor: 'pink' }}>
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
      <h3>Best Selling Product</h3>
      <TopSellingProduct />
    </div>
  );
};

export default ManagerDashboard;

ManagerDashboard.propTypes = {};
