/**
 * Calculate working days between two dates excepts holidays
 *
 * @param startDate - Start date
 * @param endDate - End Date
 * @returns Number of working days
 *
 */

export function  workingDaysBetweenDates(startDate: Date, endDate: Date): number {
  let workingDays = 0;
  let verifyDate = new Date(startDate.getTime());

  while (verifyDate <= endDate) {
    let dayOfWeek = verifyDate.getDay();
    if (!(dayOfWeek in [0, 6])) workingDays++;
    verifyDate.setDate(verifyDate.getDate() + 1);
  }

  return workingDays;
}
