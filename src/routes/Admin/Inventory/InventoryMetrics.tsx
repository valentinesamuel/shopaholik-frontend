import ReportIcon from '@mui/icons-material/Report';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import Warning from '@mui/icons-material/Warning';
import { Box, Skeleton, Typography } from '@mui/material';
// import { useGetMetricsQuery } from '../../../store/slice/MetricSlice/MetricApiSlice';

const InventoryMetrics = () => {
  // const { data, isError, isLoading } = useGetMetricsQuery();

  // if (isLoading) {
  //   return <Skeleton variant="rectangular" width={'100%'} height={100} />;
  // }

  return (
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
      <Box
        sx={{
          backgroundColor: '#D6A013',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: 3 }}>
            {/* {inventoryMetrics.lowInStock.name} */}
            low in stock
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            {/* {inventoryMetrics.lowInStock.value} */}
            10
          </Typography>
        </Box>
        <Box>
          <Warning
            fontSize="large"
            sx={{
              color: 'white',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#F44336',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: 3 }}>
            {/* {inventoryMetrics.outOfStock.name} */}
            out of stock
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            {/* {inventoryMetrics.outOfStock.value} */}3
          </Typography>
        </Box>
        <Box>
          <ReportIcon
            fontSize="large"
            sx={{
              color: 'white',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#7B001E',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: 3 }}>
            {/* {inventoryMetrics.expiredProducts.name} */}
            expired products
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            {/* {inventoryMetrics.expiredProducts.value} */}1
          </Typography>
        </Box>
        <Box>
          <FmdBadIcon
            fontSize="large"
            sx={{
              color: 'white',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default InventoryMetrics;
