/**
 * Convert to Number
 *
 * @param value - Number or String
 * @returns Number
 *
 */

export const toNumber = (value: string | number) => {
  if (typeof value === 'number') return value;
  return parseInt(value.replace(/\D+/g, ''));
};
