export interface Supplier {
  suplier_id: string;
  name: string;
  address: string;
  phone: number;
  last_order_date: Date;
  orders: Order[];
  profile_pic_url: string;
  state: string;
  country: string;
  additional_infromation: string;
}

export interface Order {
  order_id: string;
  date_of_placement: Date;
  shipping_status: ShippingStatus;
  total_price: string;
  delivery_date: Date;
  supplier_id: string;
  order_number: string;
  ordered_items: OrderedItem[];
}

export interface OrderedItem {
  ordered_item_id: string;
  name: string;
  quantity: string;
  unit_price: number;
  total_price: string;
}

export interface Product {
  product_id: string;
  name: string;
  category: string;
  product_code: string;
  quantity_in_stock: number;
  min_quantity: number;
  unit_price: number;
  date_of_arrival: Date;
  supplier_id: string;
  shelf_life_duration: string;
  stock_status: StockStatus;
}

export interface Personnel {
  personnel_id: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  date_of_birth: string;
  profile_picture_url: string;
  phone: number;
  email: string;
  religion: string;
  address: string;
  city: string;
  state: string;
  marital_status: string;
  gender: string;
  country: string;
  additional_info: string;
  guarantor: {
    name: string;
    date_of_birth: string;
    relationship_with_staff: string;
    phone: number;
    email: string;
    address: string;
    gender: string;
  };
  job_designation: JobDesignation;
  availability_status: AvailAbilityStatus;
  working_days: WorkingDay;
  monthly_salary: number;
}

export enum StockStatus {
  'IN_STOCK' = 'IN STOCK',
  'OUT_OF_STOCK' = 'OUT OF STOCK',
  'LOW_IN_STOCK' = 'LOW IN STOCK',
  'EXPIRED' = 'EXPIRED',
}

export enum ADMINROLE {
  'MANAGER' = 'MANAGER',
  'SUPERVISOR' = 'SUPERVISOR',
  'CASHIER' = 'CASHIER',
}
export enum JobDesignation {
  'MANAGER' = 'MANAGER',
  'SUPERVISOR' = 'SUPERVISOR',
  'CASHIER' = 'CASHIER',
  'SECURITY' = 'SECURITY',
  'JANITOR' = 'JANITOR',
}

export enum AvailAbilityStatus {
  'ON_DUTY' = 'ON DUTY',
  'OFF_DUTY' = 'OFF DUTY',
  'ON_LEAVE' = 'ON LEAVE',
}

export enum WorkingDay {
  'MONDAY' = 'MONDAY',
  'TUESDAY' = 'TUESDAY',
  'WEDNESDAY' = 'WEDNESDAY',
  'THURSDAY' = 'THURSDAY',
  'FRIDAY' = 'FRIDAY',
  'SATURDAY' = 'SATURDAY',
  'SUNDAY' = 'SUNDAY',
}

export enum ShippingStatus {
  'CONFIRMED' = 'CONFIRMED',
  'PENDING' = 'PENDING',
  'DELIVERED' = 'DELIVERED',
}
