import ReportIcon from '@mui/icons-material/Report';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import WarningIcon from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Divider, Box, Typography, Paper } from '@mui/material';
import styled from 'styled-components';
import { UserTheme } from '../Utils/UserTheme';

const StockQtyItem = styled(Box)`
  display: flex;
  padding: 1.6875rem 15px 1.6875rem 15px;
  align-items: center;
  justify-content: center;

  .text {
    margin-left: 20px;
    align-items: center;
    display: flex;
  }

  @media ${UserTheme.mediaQuery.mobile} {
  }
`;

const StockQuantityRow = () => {
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          padding: '1% 0',
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
          <div className="text">
            <Typography
              variant="h4"
              sx={{
                color: 'primary.contrastText',
              }}
            >
              23
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
              Low in stock
            </Typography>
          </div>
        </StockQtyItem>
        <StockQtyItem>
          <div className="icon">
            <ReportIcon color="error" />
          </div>
          <div className="text">
            <Typography
              variant="h4"
              sx={{
                color: 'primary.contrastText',
              }}
            >
              6
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
              Out of stock
            </Typography>
          </div>
        </StockQtyItem>
        <StockQtyItem>
          <div className="icon">
            <FmdBadIcon color="error" />
          </div>
          <div className="text">
            <Typography
              variant="h4"
              sx={{
                color: 'primary.contrastText',
              }}
            >
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
              Expired Products
            </Typography>
          </div>
        </StockQtyItem>
        <StockQtyItem>
          <div className="icon">
            <LocalShippingIcon color="error" />
          </div>
          <div className="text">
            <Typography
              variant="h4"
              sx={{
                color: 'primary.contrastText',
              }}
            >
              40
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
              Overdue Shipments
            </Typography>
          </div>
        </StockQtyItem>
      </Paper>
    </>
  );
};

export default StockQuantityRow;
