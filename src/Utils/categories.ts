import {
  ShippingStatus,
  JobDesignation,
  AvailAbilityStatus,
} from './Types';

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

export const jobDesignationOptions = [
  {
    id: '1',
    name: JobDesignation.MANAGER,
    value: JobDesignation.MANAGER,
  },
  {
    id: '2',
    name: JobDesignation.SUPERVISOR,
    value: JobDesignation.SUPERVISOR,
  },
  {
    id: '3',
    name: JobDesignation.CASHIER,
    value: JobDesignation.CASHIER,
  },
  {
    id: '4',
    name: JobDesignation.JANITOR,
    value: JobDesignation.JANITOR,
  },
  {
    id: '5',
    name: JobDesignation.SECURITY,
    value: JobDesignation.SECURITY,
  },
];

export const jobAvailabilityStatus = [
  {
    id: '1',
    name: AvailAbilityStatus.OFF_DUTY,
    value: AvailAbilityStatus.OFF_DUTY,
  },
  {
    id: '2',
    name: AvailAbilityStatus.ON_DUTY,
    value: AvailAbilityStatus.ON_DUTY,
  },
  {
    id: '3',
    name: AvailAbilityStatus.ON_LEAVE,
    value: AvailAbilityStatus.ON_LEAVE,
  },
];
