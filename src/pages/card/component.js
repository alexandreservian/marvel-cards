// @flow
import React, { useEffect, memo } from 'react';

type Props = {
  match: Object<any>,
  searchCard: Function
};

const Card = ({ card, match, searchCard }: Props): React.Node => {
  const {
    params: { id }
  } = match;
  console.log(card);

  useEffect(() => {
    searchCard(id);
  }, [searchCard, id]);

  return <div />;
};

export default memo(Card);
