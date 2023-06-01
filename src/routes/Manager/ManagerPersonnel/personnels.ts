import { JobDesignation } from '../../../Utils/Types';

export interface Personnel {
  id: string;
  name: string;
  department: JobDesignation;
}

export const personnels: Personnel[] = [
  {
    id: '5d99e6ba',
    name: 'Jared Gonzales',
    department: JobDesignation.SUPERVISOR,
  },
  { id: '8f5de7fb', name: 'Lucy Schmidt', department: JobDesignation.CASHIER },
  {
    id: '1e5abef5',
    name: 'Emily Frank',
    department: JobDesignation.SUPERVISOR,
  },
  {
    id: '0651e7a3',
    name: 'Harry Fitzgerald',
    department: JobDesignation.CASHIER,
  },
  {
    id: '4a66087c',
    name: 'Curtis Ball',
    department: JobDesignation.FLOOR_WORKER,
  },
  { id: '4282c0af', name: 'Sallie Gray', department: JobDesignation.JANITOR },
  { id: 'fe29a5ac', name: 'Marion Ford', department: JobDesignation.MANAGER },
  { id: '2904d8da', name: 'Lora Soto', department: JobDesignation.CASHIER },
  { id: 'b77e1b95', name: 'Jimmy Hudson', department: JobDesignation.SECURITY },
  { id: 'aa00e79d', name: 'Russell Quinn', department: JobDesignation.MANAGER },
  {
    id: 'b7c0055d',
    name: 'Benjamin Rice',
    department: JobDesignation.FLOOR_WORKER,
  },
  {
    id: '3b2b05ec',
    name: 'Ollie Jennings',
    department: JobDesignation.FLOOR_WORKER,
  },
  {
    id: '0f6642fa',
    name: 'Mitchell Dennis',
    department: JobDesignation.MANAGER,
  },
  {
    id: '79ce09b5',
    name: 'Sara Woods',
    department: JobDesignation.FLOOR_WORKER,
  },
];
