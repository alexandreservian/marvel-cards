// @flow
import React, { useEffect, memo } from 'react';
import Card from 'components/card';
import { Content, List } from './style';
type Props = {
  cards: Array<any>,
  searchCards: Function
};

const ListCards = ({ cards, searchCards }: Props): React.Node => {
  useEffect(() => {
    searchCards({ limit: 23 });
  }, [searchCards]);

  return (
    <Content>
      <List>
        {cards.map(({ id, name, thumbnail }) => (
          <Card key={id} id={id} name={name} thumbnail={thumbnail} />
        ))}
      </List>
    </Content>
  );
};

export default memo(ListCards);
