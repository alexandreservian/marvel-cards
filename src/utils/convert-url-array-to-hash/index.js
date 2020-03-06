const convertUrlArrayToHash = (urls = []) =>
  urls.reduce((acc, { type, url }) => ({ ...acc, [type]: url }), {});

export default convertUrlArrayToHash;
