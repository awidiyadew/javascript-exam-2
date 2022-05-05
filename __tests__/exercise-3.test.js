import getNumberType from '../src/exercise-3';

describe('get the type of the number', () => {
    test('should return even number given 24', () => {
        //GIVEN
        const number = 24;
        const expected = 'even number';

        //WHEN
        const result = getNumberType(number);

        //THEN
        expect(result).toEqual(expected);
    });

    test('should return odd number given 13', () => {
        //GIVEN
        const number = 13;
        const expected = 'odd number';

        //WHEN
        const result = getNumberType(number);

        //THEN
        expect(result).toEqual(expected);
    });

    test('should return null given 0', () => {
        //GIVEN
        const number = 0;

        //WHEN
        const result = getNumberType(number);

        //THEN
        expect(result).toBeNull();
    });

    test('should return null given -10', () => {
        //GIVEN
        const number = -10;

        //WHEN
        const result = getNumberType(number);

        //THEN
        expect(result).toBeNull();
    });
});