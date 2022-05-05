const getNumberType = (number) => {
  if (number <= 0) {
    return null;
  }
  const isEvenNumber = number % 2 === 0;
  return isEvenNumber ? 'even number' : 'odd number';
};

export default getNumberType;
