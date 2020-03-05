// @flow
import React, { useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';

type Props = {
  card: Object<any>,
  searchCard: Function
};

const Card = ({ card, searchCard }: Props): React.Node => {
  const { id } = useParams();

  useEffect(() => {
    searchCard(id);
  }, [searchCard, id]);

  return <div />;
};

export default memo(Card);
