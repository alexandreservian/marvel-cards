const getTotalPages = (total = 0, limit = 0) => Math.ceil(total / limit);

export default getTotalPages;
