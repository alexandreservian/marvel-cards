//@flow
import React, { memo } from 'react';
import visibleComponentHoc from 'components/visible-component-hoc';
import Icon from 'components/icon';
import ItemCollection from 'components/item-collection';
import { Content, Header, Title, List, Item } from './style';

type Props = {
  data: Array<any>,
  title: String,
  icon: String
};

const Collection = ({ data, title, icon }: Props): React.Node => {
  return (
    <Content>
      <Header>
        <Icon name={icon} className="icon" />
        <Title>{title}</Title>
      </Header>
      <List>
        {data.map(({ title, thumbnail, detail }, index) => (
          <Item key={index}>
            <ItemCollection title={title} thumbnail={thumbnail} detail={detail} />
          </Item>
        ))}
      </List>
    </Content>
  );
};

export default memo(visibleComponentHoc(Collection));
