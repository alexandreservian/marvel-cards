// @flow
import React, { memo } from 'react';
import visibleComponentHoc from 'components/visible-component-hoc';

type Props = {
  name: string,
  className?: string
};

const Icon = ({ name, className }: Props): React.Node => {
  const newClassName = className ? className : '';
  return <i className={`icon-${name} ${newClassName}`} />;
};

export default memo(visibleComponentHoc(Icon));
