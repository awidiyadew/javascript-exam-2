const getTheExactNumber = (numbers) => {
  const multipliedOfThreeNumbers = numbers.reduce((acc, number) => {
    const isMultiplyOfThree = number % 3 === 0;
    if (isMultiplyOfThree) {
      return [...acc, number];
    }
    return acc;
  }, []);
  const hasItems = multipliedOfThreeNumbers.length > 0;
  return hasItems ? Math.max(...multipliedOfThreeNumbers) : undefined;
};

export default getTheExactNumber;
