interface InventoryData {
  name: string;
  category: string;
  stock_status: string;
}

export const filterAndSearchInventoryItems = <T extends InventoryData>(
  rows: T[],
  tabOption: string,
  search: string,
  category: string,
): T[] => {
  const filteredRows = rows
    .filter((row) => row.name.toLowerCase().includes(search.toLowerCase()))
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
