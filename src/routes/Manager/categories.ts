import { ShippingStatus } from './../../Utils/Types';
export const categories = [
  {
    value: 'beverages',
    name: 'Beverages',
    id: '1',
  },
  {
    value: 'clothing',
    name: 'Clothing',
    id: '2',
  },
  {
    value: 'electronics',
    name: 'Electronics',
    id: '3',
  },
];

export const shippingStatusOptions = [
  {
    id: '1',
    name: ShippingStatus.PENDING,
    value: ShippingStatus.PENDING,
  },
  {
    id: '2',
    name: ShippingStatus.CONFIRMED,
    value: ShippingStatus.CONFIRMED,
  },
  {
    id: '3',
    name: ShippingStatus.DELIVERED,
    value: ShippingStatus.DELIVERED,
  },
];
