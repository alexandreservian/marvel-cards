import generateTypeError from 'utils/generate-type-error';

const convertUrlArrayToHash = (urls = []) => {
  const isArray = Array.isArray(urls);
  return isArray
    ? urls.reduce((acc, { type, url }) => ({ ...acc, [type]: url }), {})
    : generateTypeError('The parameter must be an array');
};

export default convertUrlArrayToHash;
