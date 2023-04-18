/**
 * Money region format
 *
 * @param price - Number or String
 * @param format - Money region format ('ru-RU')
 * @returns String - format result
 *
 */


import { toNumber } from '../number/toNumber';

export const formatMoney = (price: string | number, format: string) => new Intl.NumberFormat(format).format(toNumber(price));
