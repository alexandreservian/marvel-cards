const transformResponseList = (response = {}) => {
  const { data } = response;

  return { ...data };
};

export default transformResponseList;
