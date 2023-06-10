import ReportIcon from '@mui/icons-material/Report';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import WarningIcon from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Typography, Paper } from '@mui/material';
import { styled as MUIStyled } from '@mui/material';
import { Fragment } from 'react';
// import { useGetMetricsQuery } from '../store/slice/MetricSlice/MetricApiSlice';

export const StockQtyItem = MUIStyled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StockQtyItemText = MUIStyled(Box)(() => ({
  marginLeft: '20px',
  alignItems: 'center',
  display: 'flex',
  padding: '4% 0',
  justifyContent: 'center',
}));

const StockQuantityRow = () => {
  // const stateStockmetrics = useAppSelector((state) => state.metricReducer);
  //  const { data, isLoading } = useGetMetricsQuery();
  // const stockMetrics = stateStockmetrics;

  return (
    <Fragment>
      <Paper
        elevation={2}
        sx={{
          padding: '2% 1.5%',
          display: 'flex',
          margin: '2% 0',
          color: 'white',
          justifyContent: 'space-between',
          borderRadius: 2,
          flexDirection: {
            mobile: 'column',
            tablet: 'column',
            laptop: 'row',
            desktop: 'row',
          },
        }}
      >
        <StockQtyItem>
          <div className="icon">
            <WarningIcon color="warning" />
          </div>
          <StockQtyItemText>
            <Typography
              variant="h4"
              sx={{
                color: 'primary.contrastText',
              }}
            >
              {/* {stockMetrics.lowInStock.value} */}
              12
            </Typography>
            <Typography
              variant="inherit"
              sx={{
                width: '50%',
                marginLeft: '5px',
                color: 'primary.contrastText',
                fontWeight: 'regular',
              }}
            >
              {/* {stockMetrics.lowInStock.name} */}
              low in stock
            </Typography>
          </StockQtyItemText>
        </StockQtyItem>
        <StockQtyItem>
          <div className="icon">
            <ReportIcon color="error" />
          </div>
          <StockQtyItemText>
            <Typography
              variant="h4"
              sx={{
                color: 'primary.contrastText',
              }}
            >
              {/* {stockMetrics.outOfStock.value} */}1
            </Typography>
            <Typography
              variant="inherit"
              sx={{
                width: '50%',
                marginLeft: '5px',
                color: 'primary.contrastText',
                fontWeight: 'regular',
              }}
            >
              {/* {stockMetrics.outOfStock.name} */}
              out of stock
            </Typography>
          </StockQtyItemText>
        </StockQtyItem>
        <StockQtyItem>
          <div className="icon">
            <FmdBadIcon color="error" />
          </div>
          <StockQtyItemText>
            <Typography
              variant="h4"
              sx={{
                color: 'primary.contrastText',
              }}
            >
              2{/* {stockMetrics.expiredProducts.value} */}
            </Typography>
            <Typography
              variant="inherit"
              sx={{
                width: '50%',
                marginLeft: '5px',
                color: 'primary.contrastText',
                fontWeight: 'regular',
              }}
            >
              {/* {stockMetrics.expiredProducts.name} */}
              expired products
            </Typography>
          </StockQtyItemText>
        </StockQtyItem>
        <StockQtyItem>
          <div className="icon">
            <LocalShippingIcon color="error" />
          </div>
          <StockQtyItemText>
            <Typography
              variant="h4"
              sx={{
                color: 'primary.contrastText',
              }}
            >
              {/* {stockMetrics.overdueShipments.value} */}5
            </Typography>
            <Typography
              variant="inherit"
              sx={{
                width: '50%',
                marginLeft: '5px',
                color: 'primary.contrastText',
                fontWeight: 'regular',
              }}
            >
              {/* {stockMetrics.overdueShipments.name} */}
              overdue shipments
            </Typography>
          </StockQtyItemText>
        </StockQtyItem>
      </Paper>
    </Fragment>
  );
};

export default StockQuantityRow;
