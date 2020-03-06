// @flow
import React, { memo } from 'react';
import { Content, ContentIn } from './style';

type Props = {
  children?: React.ChildrenArray<React.Element<any>>
};

const Hexagon = ({ children }: Props): React.Node => (
  <Content>
    <ContentIn>{children}</ContentIn>
  </Content>
);

export default memo(Hexagon);
