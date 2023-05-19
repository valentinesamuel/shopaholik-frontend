import { FC } from 'react';
import DashboardMetric from '../../../components/DashboardMetric';
import { Box, Paper } from '@mui/material';
import { dashboardMetrics } from './metrics';
import StockQuantityCard from '../../../components/StockQuantityRow';
import TopSellingProduct from '../../../components/TopSellingProduct';
import Navbar from '../../../components/Navbar';
import TestColors from '../../../components/TestColors';

const ManagerDashboard: FC = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        height: '100vh',
        overflowX: 'auto',
        padding: '1% 3% 0% 3%',
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            mobile: 'repeat(auto-fit, minmax(100%, 30%))',
            tablet: 'repeat(auto-fit, minmax(100%, 30%))',
            desktop: 'repeat(auto-fit, minmax(300px, 30%))',
          },
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
      <Paper
        sx={{
          padding: 3,
          borderRadius: 2,
        }}
        elevation={3}
      >
        <h3 style={{ marginBottom: 20 }}>Best Selling Products</h3>
        <TestColors />
        {/* <TopSellingProduct /> */}
      </Paper>
    </Paper>
  );
};

export default ManagerDashboard;

ManagerDashboard.propTypes = {};
