function stringToCategory<T>(
  enm: { [s: string]: T },
  value: string,
): T | undefined {
  return (Object.values(enm) as unknown as string[]).includes(value)
    ? (value as unknown as T)
    : undefined;
}

// enum Color {
//   Green = 'GRN',
//   Red = 'RD',
// }

// stringToCategory(Color, "RD"); // Color.Red
// stringToCategory(Color, "UNKNOWN"); // undefined
// stringToCategory(Color, "Red"); // undefined