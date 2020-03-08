import generateTypeError from 'utils/generate-type-error';

const returnOne = (number = 1) => (number === 0 ? 1 : number);
const isNumber = number => typeof number === 'number';

const getTotalPages = (total = 1, limit = 1) => {
  const isNumberTotal = isNumber(total);
  const isNumberLimit = isNumber(limit);

  return !isNumberTotal
    ? generateTypeError('The first parameter must be an number')
    : !isNumberLimit
    ? generateTypeError('The second parameter must be an number')
    : Math.ceil(returnOne(total) / returnOne(limit));
};

export default getTotalPages;
