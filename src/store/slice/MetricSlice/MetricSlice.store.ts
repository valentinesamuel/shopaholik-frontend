import { createSlice } from '@reduxjs/toolkit';
import { Metrics } from '../../../Utils/Types';
import { metricApiSlice } from './MetricApiSlice';

const initialState: Metrics = {
  dailyProfit: {
    id: '220d9cdd',
    name: "today's profit",
    value: 120243,
  },
  purchaseCount: {
    id: 'b1e69cb2',
    name: "today's purchase count",
    value: 2482,
  },
  dailyLoss: {
    id: '599abac5',
    name: "today's loss",
    value: 1200,
  },
  dailySales: {
    id: '78b7ff27',
    name: 'items sold since today',
    value: 500,
  },
  inventoryCost: {
    id: '453fde02',
    name: 'total inventory cost',
    value: 2000000,
  },
  staffOnDuty: {
    id: 'f19ea5be',
    name: 'staff on duty',
    value: 12,
  },
  lowInStock: {
    id: 'bb4eb591',
    name: 'Low in Stock',
    value: 10,
  },
  outOfStock: {
    id: 'b24fb843',
    name: 'Out of Stock',
    value: 3,
  },
  expiredProducts: {
    id: 'a826cf9d',
    name: 'Expired Prodcuts',
    value: 0,
  },
  overdueShipments: {
    id: 'bb379300',
    name: 'Overdue Shipments',
    value: 0,
  },
  pendingOrders: {
    id: '81b4b01b',
    name: 'Pending Orders',
    value: 2,
  },
  receivedOrders: {
    id: '896eec4d',
    name: 'Received Orders',
    value: 10,
  },
  shippedOrders: {
    id: 'c3e19de3',
    name: 'Shipped Orders',
    value: 12,
  },
  costOfPendingOrders: {
    id: 'c3e19de3',
    name: 'Cost of Pending Orders',
    value: 250000,
  },
};

export const metricSlice = createSlice({
  name: 'metric',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      metricApiSlice.endpoints.getMetrics.matchFulfilled,
      (state, action) => {
        state = action.payload;
      },
    );
  },
});

export default metricSlice.reducer;
