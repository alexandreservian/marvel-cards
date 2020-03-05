// @flow
import React, { Fragment, memo } from 'react';
import ReactPaginate from 'react-paginate';
import visibleComponentHoc from 'components/visible-component-hoc';
import Icon from 'components/icon';
import { Content, Legend } from './style';
type Props = {
  pageCount: Number,
  onPageChange: Function,
  initialPage: Number
};

const ButtonPrev = () => (
  <Fragment>
    <Icon name="chevron-left" />
    <Legend>Prev</Legend>
  </Fragment>
);

const ButtonNext = () => (
  <Fragment>
    <Legend>Next</Legend>
    <Icon name="chevron-right" />
  </Fragment>
);

const Pagination = ({ pageCount, onPageChange, initialPage }: Props): React.Node => {
  return (
    <Content>
      <ReactPaginate
        previousLabel={<ButtonPrev />}
        nextLabel={<ButtonNext />}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        breakLabel={'...'}
        onPageChange={onPageChange}
        initialPage={initialPage}
        containerClassName="pagination"
        disabledClassName="disabled-nav-button"
        breakClassName="break"
        activeClassName="active"
      />
    </Content>
  );
};

export default memo(visibleComponentHoc(Pagination));
