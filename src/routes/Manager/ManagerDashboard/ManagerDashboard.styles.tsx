import { Box } from '@mui/material';
import styled from 'styled-components';
import { UserTheme } from '../../../Utils/UserTheme';

export const StockQtyItem = styled(Box)`
  display: flex;
  padding: 1.6875rem 5.0625rem 1.6875rem 1.875rem;
  align-items: center;

  .text {
    margin-left: 20px;
    align-items: center;
    display: flex;
    .quantity {
      font-size: ${UserTheme.fontSize.fourxl};
      font-weight: ${UserTheme.fontWeight.semiBold};
    }
    .label {
      width: 50%;
      margin-left: 0.3125rem;
      font-size: ${UserTheme.fontSize.sm};
      color: ${UserTheme.color.secondary600};
    }
  }
`;
