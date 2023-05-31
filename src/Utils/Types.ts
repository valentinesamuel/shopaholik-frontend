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
  category: ProductCategory;
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
  phone: string;
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
    phone: string;
    email: string;
    address: string;
    gender: string;
  };
  job_designation: JobDesignation | ADMINROLE;
  availability_status: AvailAbilityStatus;
  monthly_salary: number;
}

export enum StockStatus {
  IN_STOCK = 'IN STOCK',
  OUT_OF_STOCK = 'OUT OF STOCK',
  LOW_IN_STOCK = 'LOW IN STOCK',
  EXPIRED = 'EXPIRED',
}

export enum ADMINROLE {
  MANAGER = 'MANAGER',
  SUPERVISOR = 'SUPERVISOR',
  CASHIER = 'CASHIER',
}
export enum JobDesignation {
  MANAGER = 'MANAGER',
  SUPERVISOR = 'SUPERVISOR',
  FLOOR_WORKER = 'FlOOR WORKER',
  CASHIER = 'CASHIER',
  SECURITY = 'SECURITY',
  JANITOR = 'JANITOR',
}

export enum AvailAbilityStatus {
  ON_DUTY = 'ON DUTY',
  OFF_DUTY = 'OFF DUTY',
  ON_LEAVE = 'ON LEAVE',
}

export enum ShippingStatus {
  CONFIRMED = 'CONFIRMED',
  PENDING = 'PENDING',
  DELIVERED = 'DELIVERED',
}

export const enum ProductCategory {
  GROCERIES = 'Groceries',
  DAIRY_AND_EGGS = 'Dairy and Eggs',
  MEAT_AND_POULTRY = 'Meat and Poultry',
  SEAFOOD = 'Seafood',
  FRESH_PRODUCE = 'Fresh Produce',
  FROZEN_FOODS = 'Frozen Foods',
  BAKERY_AND_BAKED_GOODS = 'Bakery and Baked Goods',
  SNACKS_AND_CHIPS = 'Snacks and Chips',
  BEVERAGES = 'Beverages',
  CANNED_AND_PACKAGED_GOODS = 'Canned and Packaged Goods',
  CONDIMENTS_AND_SAUCES = 'Condiments and Sauces',
  BREAKFAST_AND_CEREAL = 'Breakfast and Cereal',
  PASTA_AND_RICE = 'Pasta and Rice',
  COOKING_OILS_AND_VINEGARS = 'Cooking Oils and Vinegars',
  SPICES_AND_SEASONINGS = 'Spices and Seasonings',
  CANDY_AND_SWEETS = 'Candy and Sweets',
  HEALTH_AND_WELLNESS = 'Health and Wellness',
  PERSONAL_CARE_AND_HYGIENE = 'Personal Care and Hygiene',
  HOUSEHOLD_SUPPLIES = 'Household Supplies',
  BABY_AND_CHILD_CARE = 'Baby and Child Care',
  PET_CARE = 'Pet Care',
  OFFICE_AND_SCHOOL_SUPPLIES = 'Office and School Supplies',
  ELECTRONICS_AND_APPLIANCES = 'Electronics and Appliances',
  HOME_AND_KITCHEN = 'Home and Kitchen',
  CLOTHING_AND_ACCESSORIES = 'Clothing and Accessories',
  CLEANING_PRODUCTS = 'Cleaning Products',
  GARDENING_AND_OUTDOOR = 'Gardening and Outdoor',
  AUTOMOTIVE_AND_CAR_CARE = 'Automotive and Car Care',
  SPORTS_AND_FITNESS = 'Sports and Fitness',
  TOYS_AND_GAMES = 'Toys and Games',
  BOOKS_AND_MAGAZINES = 'Books and Magazines',
  MISCELLANEOUS = 'Miscellaneous',
}
