export const strRepeat = (value: number): string => {
  const str = String(value);
  const result = str.slice(0, str.length - 1) + '.' + str.slice(str.length - 1);
  return result.padStart(3, '0');
};
