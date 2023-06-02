import { createSlice } from '@reduxjs/toolkit';
import { Supplier } from '../../../Utils/Types';
import { supplierApiSlice } from './SupplierApiSlice';
import dayjs from 'dayjs';

interface IinitialState {
  suppliers: Supplier[];
}

const initialState: IinitialState = {
  suppliers: [
    {
      supplierId: '1',
      name: 'Leona Cook Partners',
      address: '666 Lahib Lane',
      phone: '(985) 819-1868',
      last_order_date: dayjs(new Date()),
      profile_pic_url: 'https://example.com/profile-pic-1.jpg',
      state: 'Piumrin',
    },
    {
      supplierId: '2',
      name: 'Mendoza Fitness',
      address: '1839 Ofoder Key',
      phone: '(513) 858-8850',
      last_order_date: dayjs(new Date()),
      profile_pic_url: 'https://example.com/profile-pic-2.jpg',
      state: 'Dohepdar',
    },
  ],
};

export const supplierSlice = createSlice({
  name: 'supplier',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      supplierApiSlice.endpoints.getSuppliers.matchFulfilled,
      (state, action) => {
        state.suppliers = action.payload;
      },
    );
  },
});

export default supplierSlice.reducer;
