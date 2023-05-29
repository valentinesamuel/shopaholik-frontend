import dashboard from '../../../assets/icons/dashboard.svg';
import inventory from '../../../assets/icons/inventory.svg';
import orders from '../../../assets/icons/order.svg';
import suppliers from '../../../assets/icons/suppliers.svg';
import personnel from '../../../assets/icons/personnel.svg';
import profit from '../../../assets/icons/small-profit.svg'

export const sideRoutes = [
  {
    id: 1,
    name: 'dashboard',
    icon: dashboard,
    destination: 'dashboard',
  },
  {
    id: 2,
    name: 'inventory',
    icon: inventory,
    destination: 'inventory',
  },
  {
    id: 3,
    name: 'orders',
    icon: orders,
    destination: 'order',
  },
  {
    id: 4,
    name: 'suppliers',
    icon: suppliers,
    destination: 'supplier',
  },
  {
    id: 5,
    name: 'personnel',
    icon: personnel,
    destination: 'personnel',
  },
  {
    id: 6,
    name: 'sale',
    icon: profit,
    destination: 'sale',
  },
];
