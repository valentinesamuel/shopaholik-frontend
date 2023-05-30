import { ShippingStatus } from "../../../Utils/Types";

interface OrderData {
  orderNumber: string;
  shippingStatus: ShippingStatus;
}

export const filterAndSearchOrders = <T extends OrderData>(
  rows: T[],
  tabOption: string,
  search: string,
): T[] => {
  const filteredRows = rows
    .filter((row) =>
      row.orderNumber.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((row) => {
      if (tabOption === '') {
        return true;
      }
      return row.shippingStatus === tabOption;
    });
  return filteredRows;
};
