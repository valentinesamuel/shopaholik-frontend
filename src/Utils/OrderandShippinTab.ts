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
    personnelTab: '',
  },
  {
    id: '2',
    label: 'Management',
    personnelTab: JobDesignation.MANAGER,
  },
  {
    id: '3',
    label: 'Supervisor',
    personnelTab: JobDesignation.SUPERVISOR,
  },
  {
    id: '4',
    label: 'Floor Worker',
    personnelTab: JobDesignation.FLOOR_WORKER,
  },
  {
    id: '5',
    label: 'Cashier',
    personnelTab: JobDesignation.CASHIER,
  },
  {
    id: '6',
    label: 'Security',
    personnelTab: JobDesignation.SECURITY,
  },
  {
    id: '7',
    label: 'Janitor',
    personnelTab: JobDesignation.JANITOR,
  },
];
