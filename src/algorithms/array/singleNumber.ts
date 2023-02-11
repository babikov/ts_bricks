/**
 * 136. Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 *
 * @param array - input array
 * @returns Number - output
 *
 */

export function singleNumber (array: number[]): number {
    let mask = 0;
    for (let i = 0; i < array.length; i++) {
        mask ^= array[i]
    }
    return mask;
}
