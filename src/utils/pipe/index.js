import generateTypeError from 'utils/generate-type-error';

const pipe = (...higherFunctions) => (base = '') => {
  const isAllFunctions = higherFunctions.some(func => typeof func === 'function');
  return isAllFunctions
    ? higherFunctions.reduce((func, nextHigherFunction) => nextHigherFunction(func), base)
    : generateTypeError('All parameter must be an function');
};

export default pipe;
