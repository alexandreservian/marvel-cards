//@flow
import React, { memo } from 'react';
import visibleComponentHoc from 'components/visible-component-hoc';
import Card from 'components/card';
import { Content } from './style';

type Props = {
  cards: Array<any>
};

const List = ({ cards }: Props): React.Node => {
  return (
    <Content data-testid="list-cards">
      {cards.map(({ id, name, thumbnail }) => (
        <Card key={id} id={id} name={name} thumbnail={thumbnail} />
      ))}
    </Content>
  );
};

export default memo(visibleComponentHoc(List));
