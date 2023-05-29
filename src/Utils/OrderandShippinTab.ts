import { StockStatus } from './Types';
export const orderTabs = [
  {
    id: '1',
    label: 'All Products',
  },
  {
    id: '2',
    label: 'Pending',
  },
  {
    id: '3',
    label: 'Confirmed',
  },
  {
    id: '4',
    label: 'Delivered',
  },
];

export const inventoryTabs = [
  {
    id: '1',
    label: 'All Products',
    stockStatusTab: '',
  },
  {
    id: '2',
    label: 'Low in stock',
    stockStatusTab: StockStatus.LOW_IN_STOCK,
  },
  {
    id: '3',
    label: 'Out of Stock',
    stockStatusTab: StockStatus.OUT_OF_STOCK,
  },
  {
    id: '4',
    label: 'Expired Products',
    stockStatusTab: StockStatus.EXPIRED,
  },
];

export const personnelTabs = [
  {
    id: '1',
    label: 'All Personnel',
  },
  {
    id: '2',
    label: 'Management',
  },
  {
    id: '3',
    label: 'Floor Worker',
  },
  {
    id: '4',
    label: 'Cashier',
  },
  {
    id: '5',
    label: 'Security',
  },
];
