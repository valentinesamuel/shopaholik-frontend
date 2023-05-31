import { Order } from '../../../Utils/Types';
import dayjs from 'dayjs';
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
      dateOfOrder: dayjs(new Date()),
      estimatedTimeOfArrival: dayjs(new Date()),
      supplier: 'Nestle Inc',
    },
    {
      orderId: '2',
      orderNumber: 'KF5M6YR',
      price: 59032,
      shippingStatus: ShippingStatus.CONFIRMED,
      dateOfOrder: dayjs(new Date()),
      estimatedTimeOfArrival: dayjs(new Date()),
      supplier: 'Nike Inc',
    },
    {
      orderId: '3',
      orderNumber: 'F3549G4',
      price: 34000,
      shippingStatus: ShippingStatus.PENDING,
      dateOfOrder: dayjs(new Date()),
      estimatedTimeOfArrival: dayjs(new Date()),
      supplier: 'Black Waters',
    },
    {
      orderId: '4',
      orderNumber: '30T4GKS0',
      price: 68950,
      shippingStatus: ShippingStatus.PENDING,
      dateOfOrder: dayjs(new Date()),
      estimatedTimeOfArrival: dayjs(new Date()),
      supplier: 'Bunker Fitness',
    },
  ],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      orderApiSlice.endpoints.getOrders.matchFulfilled,
      (state, action) => {
        state.orders = action.payload;
      },
    );
  },
});

export default orderSlice.reducer