const modifyStructureCard = (card = {}) => {
  const {
    id,
    name,
    description,
    urls,
    thumbnail: { path, extension }
  } = card;
  const urlsObj = urls.reduce((acc, { type, url }) => ({ ...acc, [type]: url }), {});
  return { id, name, description, thumbnail: `${path}.${extension}`, ...urlsObj };
};

export default modifyStructureCard;
