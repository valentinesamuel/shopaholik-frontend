import { JobDesignation } from '../../../Utils/Types';

export interface Personnel {
  name: string;
  department: JobDesignation;
}

export const personnels: Personnel[] = [
  { name: 'Jared Gonzales', department: JobDesignation.SUPERVISOR },
  { name: 'Lucy Schmidt', department: JobDesignation.CASHIER },
  { name: 'Emily Frank', department: JobDesignation.SUPERVISOR },
  { name: 'Harry Fitzgerald', department: JobDesignation.CASHIER },
  { name: 'Curtis Ball', department: JobDesignation.FLOOR_WORKER },
  { name: 'Sallie Gray', department: JobDesignation.JANITOR },
  { name: 'Marion Ford', department: JobDesignation.MANAGER },
  { name: 'Lora Soto', department: JobDesignation.CASHIER },
  { name: 'Jimmy Hudson', department: JobDesignation.SECURITY },
  { name: 'Russell Quinn', department: JobDesignation.MANAGER },
  { name: 'Benjamin Rice', department: JobDesignation.FLOOR_WORKER },
  { name: 'Ollie Jennings', department: JobDesignation.FLOOR_WORKER },
  { name: 'Mitchell Dennis', department: JobDesignation.MANAGER },
  { name: 'Sara Woods', department: JobDesignation.FLOOR_WORKER },
];
