import { Product } from '../../../Utils/Types';
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
  extraReducers: (builder) => {},
});

export default inventorySlice.reducer;
