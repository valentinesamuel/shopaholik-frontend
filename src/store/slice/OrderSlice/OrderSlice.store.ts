import { Order } from '../../../Utils/Types';
import { ShippingStatus } from '../../../Utils/Types';
import { createSlice } from '@reduxjs/toolkit';
import { orderApiSlice } from './OrderApiSlice';

interface IinitialState {
  orders: Order[];
}

const initialState: IinitialState = {
  orders: [
    {
      orderId: '1',
      orderNumber: 'W4NU935',
      price: 12000,
      shippingStatus: ShippingStatus.DELIVERED,
      dateOfOrder: '2019-03-06T08:00:00+08:00',
      estimatedTimeOfArrival: '2019-03-06T08:00:00+08:00',
      supplier: 'Nestle Inc',
      items: [],
    },
    {
      orderId: '2',
      orderNumber: 'KF5M6YR',
      price: 59032,
      shippingStatus: ShippingStatus.CONFIRMED,
      dateOfOrder: '2019-03-06T08:00:00+08:00',
      estimatedTimeOfArrival: '2019-03-06T08:00:00+08:00',
      supplier: 'Nike Inc',
      items: [],
    },
  ],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     orderApiSlice.endpoints.getOrders.matchFulfilled,
  //     (state, action) => {
  //       state.orders = action.payload;
  //     },
  //   );
  // },
});

export default orderSlice.reducer;
