const transformResponseItem = (response = {}) => {
  const {
    data: { results }
  } = response;
  const [result] = results;

  return { ...result };
};

export default transformResponseItem;
