import ReportIcon from '@mui/icons-material/Report';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import WarningIcon from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Typography, Paper } from '@mui/material';
import { styled as MUIStyled } from '@mui/material';
import { Fragment } from 'react';
import { useAppSelector } from '../Utils/StateDispatch';

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
  const metrics = useAppSelector((state) => state.metricReducer);

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
              {metrics.lowInStock.value}
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
              {metrics.lowInStock.name}
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
              {metrics.outOfStock.value}
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
              {metrics.outOfStock.name}
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
              {metrics.expiredProducts.value}
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
              {metrics.expiredProducts.name}
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
              {metrics.overdueShipments.value}
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
              {metrics.overdueShipments.name}
            </Typography>
          </StockQtyItemText>
        </StockQtyItem>
      </Paper>
    </Fragment>
  );
};

export default StockQuantityRow;
