// @flow
import React, { memo } from 'react';
import { Content } from './style';

type Props = {
  children?: React.ChildrenArray<React.Element<any>>
};

const Header = ({ children }: Props): React.Node => {
  return <Content>{children}</Content>;
};

export default memo(Header);
