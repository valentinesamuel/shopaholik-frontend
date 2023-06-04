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
  salesList: [],
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
    // builder.addMatcher(
    //   cashierApiSlice.endpoints.searchProduct.matchFulfilled,
    //   (state, action) => {
    //     state.salesList = action.payload.map(
    //       (saleProduct) =>
    //         ({
    //           ...saleProduct,
    //           saleQuantity: 1,
    //         } as SaleProduct),
    //     );
    //   },
    // );
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
