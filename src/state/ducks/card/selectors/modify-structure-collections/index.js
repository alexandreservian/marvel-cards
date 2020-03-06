import convertUrlArrayToHash from 'utils/convert-url-array-to-hash';

const modifyStructureCollections = (collections = []) =>
  collections.map(collection => {
    const {
      title,
      urls,
      thumbnail: { path, extension }
    } = collection;
    const urlsObj = convertUrlArrayToHash(urls);
    return { title, thumbnail: `${path}.${extension}`, ...urlsObj };
  });

export default modifyStructureCollections;
