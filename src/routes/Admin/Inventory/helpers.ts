interface Data {
  product: string;
  category: string;
  stock_status: string;
}

export const filterAndSearchInventoryItems = <T extends Data>(
  rows: T[],
  tabOption: string,
  search: string,
  category: string,
): T[] => {
  const filteredRows = rows
    .filter((row) => row.product.toLowerCase().includes(search.toLowerCase()))
    .filter((row) => {
      if (category === '') {
        return true;
      }
      return row.category === category;
    })
    .filter((row) => {
      if (tabOption === '') {
        return true;
      }
      return row.stock_status === tabOption;
    });
  return filteredRows;
};
