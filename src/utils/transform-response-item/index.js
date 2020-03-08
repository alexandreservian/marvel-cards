const transformResponseItem = (changes = {}) => (response = {}) => {
  const {
    data: { results }
  } = response;
  const [result] = results;

  return { ...result, ...changes };
};

export default transformResponseItem;
