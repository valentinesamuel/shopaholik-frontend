import ReportIcon from '@mui/icons-material/Report';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import WarningIcon from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Typography, Paper } from '@mui/material';
import styled from 'styled-components';
import { UserTheme } from '../Utils/UserTheme';
import { styled as MUIStyled } from '@mui/material';

const StockQtyItem2 = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    margin-left: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  @media ${UserTheme.mediaQuery.mobile} {
  }
`;

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
  return (
    <>
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
          </StockQtyItemText>
        </StockQtyItem>
      </Paper>
    </>
  );
};

export default StockQuantityRow;
