import { SaleProduct } from './Types';

export const calculateTotalPrice = (salesList: SaleProduct[]): number => {
  let totalPrice = 0;

  for (const product of salesList) {
    const { unit_price, saleQuantity } = product;
    const productTotalPrice = unit_price * saleQuantity;
    totalPrice += productTotalPrice;
  }

  return totalPrice;
};
