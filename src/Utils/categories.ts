import {
  ShippingStatus,
  JobDesignation,
  AvailAbilityStatus,
  ProductCategory,
} from './Types';

export const categories = [
  {
    value: ProductCategory.GROCERIES,
    id: '1',
  },
  {
    value: ProductCategory.DAIRY_AND_EGGS,
    id: '2',
  },
  {
    value: ProductCategory.MEAT_AND_POULTRY,
    id: '3',
  },
  {
    value: ProductCategory.SEAFOOD,
    id: '4',
  },
  {
    value: ProductCategory.FRESH_PRODUCE,
    id: '5',
  },
  {
    value: ProductCategory.FROZEN_FOODS,
    id: '6',
  },
  {
    value: ProductCategory.BAKERY_AND_BAKED_GOODS,
    id: '7',
  },
  {
    value: ProductCategory.SNACKS_AND_CHIPS,
    id: '8',
  },
  {
    value: ProductCategory.BEVERAGES,
    id: '9',
  },
  {
    value: ProductCategory.CANNED_AND_PACKAGED_GOODS,
    id: '10',
  },
  {
    value: ProductCategory.CONDIMENTS_AND_SAUCES,
    id: '11',
  },
  {
    value: ProductCategory.BREAKFAST_AND_CEREAL,
    id: '12',
  },
  {
    value: ProductCategory.PASTA_AND_RICE,
    id: '13',
  },
  {
    value: ProductCategory.COOKING_OILS_AND_VINEGARS,
    id: '14',
  },
  {
    value: ProductCategory.SPICES_AND_SEASONINGS,
    id: '15',
  },
  {
    value: ProductCategory.CANDY_AND_SWEETS,
    id: '16',
  },
  {
    value: ProductCategory.HEALTH_AND_WELLNESS,
    id: '17',
  },
  {
    value: ProductCategory.PERSONAL_CARE_AND_HYGIENE,
    id: '18',
  },
  {
    value: ProductCategory.HOUSEHOLD_SUPPLIES,
    id: '19',
  },
  {
    value: ProductCategory.BABY_AND_CHILD_CARE,
    id: '20',
  },
  {
    value: ProductCategory.PET_CARE,
    id: '21',
  },
  {
    value: ProductCategory.OFFICE_AND_SCHOOL_SUPPLIES,
    id: '22',
  },
  {
    value: ProductCategory.ELECTRONICS_AND_APPLIANCES,
    id: '23',
  },
  {
    value: ProductCategory.HOME_AND_KITCHEN,
    id: '24',
  },
  {
    value: ProductCategory.CLOTHING_AND_ACCESSORIES,
    id: '25',
  },
  {
    value: ProductCategory.CLEANING_PRODUCTS,
    id: '26',
  },
  {
    value: ProductCategory.GARDENING_AND_OUTDOOR,
    id: '27',
  },
  {
    value: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
    id: '28',
  },
  {
    value: ProductCategory.SPORTS_AND_FITNESS,
    id: '29',
  },
  {
    value: ProductCategory.TOYS_AND_GAMES,
    id: '30',
  },
  {
    value: ProductCategory.BOOKS_AND_MAGAZINES,
    id: '31',
  },
  {
    value: ProductCategory.MISCELLANEOUS,
    id: '32',
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
