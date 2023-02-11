import {singleNumber} from "../singleNumber";
it('Testing function singleNumber in [2, 2, 1] result 1', () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
});

it('Testing function singleNumber in [4, 2, 1, 2, 1] result 4', () => {
    expect(singleNumber([4, 2, 1, 2, 1])).toBe(4)
});

it('Testing function singleNumber in [1] result 1', () => {
    expect(singleNumber([1])).toBe(1)
});