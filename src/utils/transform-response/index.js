const transformResponse = (response = {}) => {
  const { data } = response;

  return { ...data };
};

export default transformResponse;
