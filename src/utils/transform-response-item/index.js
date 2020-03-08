import generateTypeError from 'utils/generate-type-error';

const isObject = obj => typeof obj === 'object';

const transform = (changes, response) => {
  const {
    data: { results }
  } = response;
  const [result] = results;

  return { ...result, ...changes };
};

const transformResponseItem = (changes = {}) => {
  return isObject(changes)
    ? (response = { data: { results: [] } }) => {
        return isObject(response)
          ? transform(changes, response)
          : generateTypeError('The second parameter must be an object');
      }
    : generateTypeError('The first parameter must be an object');
};

export default transformResponseItem;
