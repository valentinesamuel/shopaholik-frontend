import { StockQtyItem } from '../routes/Manager/ManagerDashboard/ManagerDashboard.styles';
import ReportIcon from '@mui/icons-material/Report';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import WarningIcon from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Divider, Stack } from '@mui/material';

const StockQuantityRow = () => {
  return (
    <>
      <Stack
        direction="row"
        divider={
          <Divider
            orientation="vertical"
            color="#CAC4D0"
            sx={{ height: 'auto', width: 3 }}
          />
        }
        spacing={2}
        justifyContent="space-between"
        sx={{ padding: '1% 0' }}
      >
        <StockQtyItem>
          <div className="icon">
            <WarningIcon color="warning" />
          </div>
          <div className="text">
            <p className="quantity">23</p>
            <p className="label">Low in stock</p>
          </div>
        </StockQtyItem>
        <StockQtyItem>
          <div className="icon">
            <ReportIcon color="error" />
          </div>
          <div className="text">
            <p className="quantity">23</p>
            <p className="label">Out of stock</p>
          </div>
        </StockQtyItem>
        <StockQtyItem>
          <div className="icon">
            <FmdBadIcon color="error" />
          </div>
          <div className="text">
            <p className="quantity">23</p>
            <p className="label">Expored products</p>
          </div>
        </StockQtyItem>
        <StockQtyItem>
          <div className="icon">
            <LocalShippingIcon color="secondary" />
          </div>
          <div className="text">
            <p className="quantity">23</p>
            <p className="label">Overdue Shipments</p>
          </div>
        </StockQtyItem>
      </Stack>
    </>
  );
};

export default StockQuantityRow;
