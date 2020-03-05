// @flow
import React, { Fragment } from 'react';

type Props = {
  visible?: boolean
};

const createHoc = (WrappedComponent: Function): Function => ({
  visible = true,
  ...rest
}: Props) => {
  return <Fragment>{visible && <WrappedComponent {...rest} />}</Fragment>;
};

const visibleComponentHoc = (WrappedComponent: Function): Function => createHoc(WrappedComponent);

export default visibleComponentHoc;
