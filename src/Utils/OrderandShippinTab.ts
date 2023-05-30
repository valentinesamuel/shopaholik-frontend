import { ShippingStatus, StockStatus } from './Types';
export const orderTabs = [
  {
    id: '1',
    label: 'All Products',
    shippingStatusTab: '',
  },
  {
    id: '2',
    label: 'Pending',
    shippingStatusTab: ShippingStatus.PENDING,
  },
  {
    id: '3',
    label: 'Confirmed',
    shippingStatusTab: ShippingStatus.CONFIRMED,
  },
  {
    id: '4',
    label: 'Delivered',
    shippingStatusTab: ShippingStatus.DELIVERED,
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
