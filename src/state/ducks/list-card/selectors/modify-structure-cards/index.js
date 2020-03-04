const modifyStructureCards = (cards = []) => {
  return cards.map(card => {
    const {
      id,
      name,
      thumbnail: { path, extension }
    } = card;
    return { id, name, thumbnail: `${path}.${extension}` };
  });
};

export default modifyStructureCards;
