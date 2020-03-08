import generateTypeError from 'utils/generate-type-error';

const isObject = obj => typeof obj === 'object';

const transform = response => {
  const { data } = response;

  return { ...data };
};

const transformResponseList = (response = { data: {} }) => {
  return isObject(response)
    ? transform(response)
    : generateTypeError('The parameter must be an object');
};

export default transformResponseList;
