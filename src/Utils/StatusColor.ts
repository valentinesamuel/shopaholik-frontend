export const getShippingStatusColor = <T extends { id: string }>(
  column: T,
  value: string | number,
) => {
  if (column.id === 'shippingStatus') {
    switch (value) {
      case 'DELIVERED':
        return 'green';
      case 'CONFIRMED':
        return 'yellow';
      case 'PENDING':
        return 'red';
      default:
        return '';
    }
  }
  return '';
};
