import { ShippingStatus, StockStatus, JobDesignation } from './Types';
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
    value: '',
  },
  {
    id: '2',
    label: 'Management',
    value: JobDesignation.MANAGER,
  },
  {
    id: '3',
    label: 'Supervisor',
    value: JobDesignation.SUPERVISOR,
  },
  {
    id: '4',
    label: 'Floor Worker',
    value: JobDesignation.FLOOR_WORKER,
  },
  {
    id: '5',
    label: 'Cashier',
    value: JobDesignation.CASHIER,
  },
  {
    id: '6',
    label: 'Security',
    value: JobDesignation.SECURITY,
  },
  {
    id: '7',
    label: 'Janitor',
    value: JobDesignation.JANITOR,
  },
];

export const gender = [
  {
    id: '1',
    label: 'MALE',
    value: 'Male',
  },
  {
    id: '2',
    label: 'FEMALE',
    value: 'Female',
  },
];
