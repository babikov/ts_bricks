import {workingDaysBetweenDates} from "../workingDaysBetweenDates";

it('Testing function workingDaysBetweenDates', () => {
    expect(workingDaysBetweenDates(new Date(2023, 0, 30), new Date(2023, 1, 5))).toBe(5);
});
