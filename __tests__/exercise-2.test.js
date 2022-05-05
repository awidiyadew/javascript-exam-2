import getTheExactNumber from '../src/exercise-2';

describe('get the biggest number multiple of 3 from the array', () => {
    test('should return the exact number', () => {
        //GIVEN
        const numbers1 = [18, 13, 14, 27, 49];
        const expected = 27;

        //WHEN
        const result = getTheExactNumber(numbers1);

        //THEN
        expect(result).toEqual(expected);
    });

    test('should return undefined when numbers is not multiple of three', () => {
        //GIVEN
        const numbers1 = [1, 2, 5];

        //WHEN
        const result = getTheExactNumber(numbers1);

        //THEN
        expect(result).toBeUndefined();
    });
});