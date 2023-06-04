import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  ProductCategory,
  SaleProduct,
  StockStatus,
} from '../../../Utils/Types';
import { cashierApiSlice } from './CashierApiSlice';

interface IinitialState {
  salesList: SaleProduct[];
}

const initialState: IinitialState = {
  salesList: [
    {
      product_id: '34fde790',
      name: 'Super Clean Glass Cleaner',
      category: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
      product_code: 'f8121d76',
      quantity_in_stock: 2,
      min_quantity: 3,
      unit_price: 7500,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'a2b4e5c6',
      shelf_life_duration: '2 years',
      stock_status: StockStatus.IN_STOCK,
      quantity_sold: 53,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity: 32,
      unit_of_measurement: 'Pack',
      saleQuantity: 2,
    },
    {
      product_id: '34fde790',
      name: 'Super Clean Glass Cleaner',
      category: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
      product_code: 'f8121d76',
      quantity_in_stock: 2,
      min_quantity: 3,
      unit_price: 7500,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'a2b4e5c6',
      shelf_life_duration: '2 years',
      stock_status: StockStatus.IN_STOCK,
      quantity_sold: 53,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity: 32,
      unit_of_measurement: 'Pack',
      saleQuantity: 2,
    },
    {
      product_id: '34fde790',
      name: 'Super Clean Glass Cleaner',
      category: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
      product_code: 'f8121d76',
      quantity_in_stock: 2,
      min_quantity: 3,
      unit_price: 7500,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'a2b4e5c6',
      shelf_life_duration: '2 years',
      stock_status: StockStatus.IN_STOCK,
      quantity_sold: 53,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity: 32,
      unit_of_measurement: 'Pack',
      saleQuantity: 2,
    },
    {
      product_id: '34fde790',
      name: 'Super Clean Glass Cleaner',
      category: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
      product_code: 'f8121d76',
      quantity_in_stock: 2,
      min_quantity: 3,
      unit_price: 7500,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'a2b4e5c6',
      shelf_life_duration: '2 years',
      stock_status: StockStatus.IN_STOCK,
      quantity_sold: 53,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity: 32,
      unit_of_measurement: 'Pack',
      saleQuantity: 2,
    },
    {
      product_id: '34fde790',
      name: 'Super Clean Glass Cleaner',
      category: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
      product_code: 'f8121d76',
      quantity_in_stock: 2,
      min_quantity: 3,
      unit_price: 7500,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'a2b4e5c6',
      shelf_life_duration: '2 years',
      stock_status: StockStatus.IN_STOCK,
      quantity_sold: 53,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity: 32,
      unit_of_measurement: 'Pack',
      saleQuantity: 2,
    },
    {
      product_id: '34fde790',
      name: 'Super Clean Glass Cleaner',
      category: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
      product_code: 'f8121d76',
      quantity_in_stock: 2,
      min_quantity: 3,
      unit_price: 7500,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'a2b4e5c6',
      shelf_life_duration: '2 years',
      stock_status: StockStatus.IN_STOCK,
      quantity_sold: 53,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity: 32,
      unit_of_measurement: 'Pack',
      saleQuantity: 2,
    },
    {
      product_id: '34fde790',
      name: 'Super Clean Glass Cleaner',
      category: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
      product_code: 'f8121d76',
      quantity_in_stock: 2,
      min_quantity: 3,
      unit_price: 7500,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'a2b4e5c6',
      shelf_life_duration: '2 years',
      stock_status: StockStatus.IN_STOCK,
      quantity_sold: 53,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity: 32,
      unit_of_measurement: 'Pack',
      saleQuantity: 2,
    },
    {
      product_id: '34fde790',
      name: 'Super Clean Glass Cleaner',
      category: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
      product_code: 'f8121d76',
      quantity_in_stock: 2,
      min_quantity: 3,
      unit_price: 7500,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'a2b4e5c6',
      shelf_life_duration: '2 years',
      stock_status: StockStatus.IN_STOCK,
      quantity_sold: 53,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity: 32,
      unit_of_measurement: 'Pack',
      saleQuantity: 2,
    },
    {
      product_id: '34fde790',
      name: 'Super Clean Glass Cleaner',
      category: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
      product_code: 'f8121d76',
      quantity_in_stock: 2,
      min_quantity: 3,
      unit_price: 7500,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'a2b4e5c6',
      shelf_life_duration: '2 years',
      stock_status: StockStatus.IN_STOCK,
      quantity_sold: 53,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity: 32,
      unit_of_measurement: 'Pack',
      saleQuantity: 2,
    },
    {
      product_id: '34fde790',
      name: 'Super Clean Glass Cleaner',
      category: ProductCategory.AUTOMOTIVE_AND_CAR_CARE,
      product_code: 'f8121d76',
      quantity_in_stock: 2,
      min_quantity: 3,
      unit_price: 7500,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'a2b4e5c6',
      shelf_life_duration: '2 years',
      stock_status: StockStatus.IN_STOCK,
      quantity_sold: 53,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity: 32,
      unit_of_measurement: 'Pack',
      saleQuantity: 2,
    },
    {
      product_id: 'dd3e5f1a',
      name: 'Pain Relief Tablets',
      category: ProductCategory.HEALTH_AND_WELLNESS,
      product_code: 'd7c6a5b3',
      quantity_in_stock: 10,
      min_quantity: 2,
      unit_price: 1200,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'e1b4c3a2',
      shelf_life_duration: '3 weeks',
      stock_status: StockStatus.IN_STOCK,
      expiry_date: '2023-02-26T12:00:00+08:00',
      quantity_sold: 40,
      quantity: 8,
      unit_of_measurement: 'Piece',
      saleQuantity: 1,
    },
    {
      product_id: '6b93903e',
      name: 'Fresh Apples',
      category: ProductCategory.GROCERIES,
      product_code: '6c8b3eaf',
      quantity_in_stock: 50,
      min_quantity: 10,
      unit_price: 100,
      date_of_arrival: '2023-02-12T12:00:00+08:00',
      supplier_id: 'e54a1f9c',
      shelf_life_duration: '2 weeks',
      stock_status: StockStatus.IN_STOCK,
      expiry_date: '2019-03-06T08:00:00+08:00',
      quantity_sold: 233,
      quantity: 12,
      unit_of_measurement: 'Piece',
      saleQuantity: 4,
    },
  ],
};

export const cashierSlice = createSlice({
  name: 'cashier',
  initialState,
  reducers: {
    addToSalesList: (state, action: PayloadAction<SaleProduct>) => {
      const { salesList } = state;
      const existingProductIndex = salesList?.findIndex(
        (product) => product.product_code === action.payload.product_code,
      );

      if (existingProductIndex !== -1) {
        // Increase the saleQuantity of the existing product
        salesList[existingProductIndex].saleQuantity += 1;
      } else {
        // Add the product to the salesList
        salesList?.push(action.payload);
      }
    },
    increaseProductQuantity: (state, action: PayloadAction<SaleProduct>) => {
      const { salesList } = state;
      const existingProductIndex = salesList?.findIndex(
        (product) => product.product_code === action.payload.product_code,
      );

      if (existingProductIndex !== -1) {
        // Increase the saleQuantity of the existing product
        salesList[existingProductIndex].saleQuantity += 1;
      } else {
        // Add the product to the salesList
        salesList?.push(action.payload);
      }
    },
    reduceProductQuantity: (state, action: PayloadAction<SaleProduct>) => {
      const { salesList } = state;
      const productIndex = salesList?.findIndex(
        (product) => product.product_code === action.payload.product_code,
      );

      if (productIndex !== -1) {
        const removedProduct = salesList[productIndex];
        if (removedProduct.saleQuantity > 1) {
          removedProduct.saleQuantity -= 1;
        } else {
          salesList.splice(productIndex, 1);
        }
      }
    },
    removeFromSalesList: (state, action: PayloadAction<SaleProduct>) => {
      const { salesList } = state;
      const productIndex = salesList?.findIndex(
        (product) => product.product_code === action.payload.product_code,
      );

      if (productIndex !== -1) {
        salesList.splice(productIndex, 1);
      }
    },
    clearSalesList: (state) => {
      state.salesList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cashierApiSlice.endpoints.makePurchase.matchFulfilled,
      (_state, _action) => {
        // TODO: might need to create a property to allow something happed when a purchase is successful
      },
    );
  },
});

export const {
  addToSalesList,
  increaseProductQuantity,
  clearSalesList,
  reduceProductQuantity,
  removeFromSalesList,
} = cashierSlice.actions;

export default cashierSlice.reducer;
