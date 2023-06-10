import { Product } from '../../../Utils/Types';
import { inventoryApiSlice } from './InventoryApiSlice';
import inventoryProductSeed from './InventorySeed';
import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
  inventoryProducts: Product[];
}

const initialState: IinitialState = {
  inventoryProducts: inventoryProductSeed,
};

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   // builder.addMatcher(
  //   //   inventoryApiSlice.endpoints.getInventoryProducts.matchFulfilled,
  //   //   (state, action) => {
  //   //     state.inventoryProducts = action.payload;
  //   //   },
  //   // );
  //   builder.addMatcher(
  //     inventoryApiSlice.endpoints.addInventoryProducts.matchFulfilled,
  //     (state, action) => {
  //       // state.inventoryProducts = action.payload;
  //       // TODO: When using real api, check to make sure that you do not edit the state here since you are invalidating tags and fetching fresh data from DB. If so, then no need to do anything special like mutating state
  //       state.inventoryProducts = [action.payload, ...state.inventoryProducts];
  //     },
  //   );
  //   builder.addMatcher(
  //     inventoryApiSlice.endpoints.deleteInventoryProducts.matchFulfilled,
  //     (state, action) => {
  //       // state.inventoryProducts = action.payload;
  //       // TODO: When using real api, check to make sure that you do not edit the state here since you are invalidating tags and fetching fresh data from DB. If so, then no need to do anything special like mutating state
  //       state.inventoryProducts = state.inventoryProducts.filter(
  //         (invetoryProduct) =>
  //           invetoryProduct.product_id !== action.payload.product_id,
  //       );
  //     },
  //   );
  // },
});

export default inventorySlice.reducer;
