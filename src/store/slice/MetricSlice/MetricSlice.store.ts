import { createSlice } from '@reduxjs/toolkit';

interface MetricValue {
  id: string;
  name: string;
  value: string | number;
}

interface IinitialState {
  dailyProfit: MetricValue;
  purchaseCount: MetricValue;
  dailyLoss: MetricValue;
  dailySales: MetricValue;
  inventoryCost: MetricValue;
  staffOnDuty: MetricValue;
  lowInStock: MetricValue;
  outOfStock: MetricValue;
  expiredProducts: MetricValue;
  overdueShipments: MetricValue;
}

const initialState: IinitialState = {
  dailyProfit: {
    id: '220d9cdd',
    name: "today's profit",
    value: 120170,
  },
  purchaseCount: {
    id: 'b1e69cb2',
    name: "today's purchase count",
    value: 220265,
  },
  dailyLoss: {
    id: '599abac5',
    name: "today's loss",
    value: 2340,
  },
  dailySales: {
    id: '78b7ff27',
    name: 'items sold since today',
    value: 110,
  },
  inventoryCost: {
    id: '453fde02',
    name: 'total inventory cost',
    value: 12000000,
  },
  staffOnDuty: {
    id: 'f19ea5be',
    name: 'staff on duty',
    value: 12,
  },
  lowInStock: {
    id: 'bb4eb591',
    name: 'Low in Stock',
    value: 23,
  },
  outOfStock: {
    id: 'b24fb843',
    name: 'Out of Stock',
    value: 6,
  },
  expiredProducts: {
    id: 'a826cf9d',
    name: 'Expired Prodcuts',
    value: 12,
  },
  overdueShipments: {
    id: 'bb379300',
    name: 'Overdue Shipments',
    value: 40,
  },
};

export const metricSlice = createSlice({
  name: 'metric',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default metricSlice.reducer;
