const modifyStructureCard = (card = {}) => {
  const {
    id,
    name,
    description,
    urls,
    thumbnail: { path, extension }
  } = card;
  return { id, name, description, urls: [...urls], thumbnail: `${path}.${extension}` };
};

export default modifyStructureCard;
