import getCommonItems from '../src/exercise-1';

describe('get common items from two different array', () => {
    test('should return common items', () => {
        //GIVEN
        const numbers1 = [1, 7, 3, 4, 6, 9];
        const numbers2 = [0, 8, 7, 5, 6];
        const expected = [7, 6];

        //WHEN
        const result = getCommonItems(numbers1, numbers2);

        //THEN
        expect(result).toEqual(expected);
    });

    test('should return common items', () => {
        //GIVEN
        const words1 = ['apple', 'orange', 'banana'];
        const words2 = ['orange', 'ant'];
        const expected = ['orange'];

        //WHEN
        const result = getCommonItems(words1, words2);

        //THEN
        expect(result).toEqual(expected);
    });
});