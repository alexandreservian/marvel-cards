import convertUrlArrayToHash from 'utils/convert-url-array-to-hash';

const modifyStructureCard = (card = {}) => {
  const {
    id,
    name,
    description,
    urls,
    thumbnail: { path, extension }
  } = card;
  const urlsObj = convertUrlArrayToHash(urls);
  return { id, name, description, thumbnail: `${path}.${extension}`, ...urlsObj };
};

export default modifyStructureCard;
