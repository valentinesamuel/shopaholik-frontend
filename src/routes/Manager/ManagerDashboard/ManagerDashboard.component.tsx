import { FC } from 'react';
import DashboardMetric from '../../../components/DashboardMetric';
import { Box, Divider, Stack } from '@mui/material';
import { dashboardMetrics } from './metrics';
import StockQuantityCard from '../../../components/StockQuantityRow';

const ManagerDashboard: FC = () => {
  return (
    <div style={{ width: '100%', backgroundColor: 'pink' }}>
      Manager dashboard
      <br />
      lorem5000
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
    </div>
  );
};

export default ManagerDashboard;

ManagerDashboard.propTypes = {};
