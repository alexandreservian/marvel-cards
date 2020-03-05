// @flow
import React, { useEffect, memo } from 'react';
import { useQueryParam, NumberParam } from 'use-query-params';
import List from 'components/list';
import LoadingPage from 'components/loading-page';
import Pagination from 'components/pagination';
import { Content } from './style';
type Props = {
  cards: Array<any>,
  searchCards: Function,
  totalPages: Number,
  loading: Boolean
};

const handleOnPageChange = setPage => ({ selected }) => setPage(selected + 1);

const ListCards = ({ cards, searchCards, totalPages, loading }: Props): React.Node => {
  const [page, setPage] = useQueryParam('page', NumberParam);
  const currentPage = page ? page - 1 : 0;
  const visibledPagination = cards.length ? true : false;

  useEffect(() => {
    searchCards({ currentPage });
  }, [searchCards, currentPage]);

  return (
    <Content>
      <List cards={cards} visible={!loading} />
      <LoadingPage visible={loading} />
      <Pagination
        visible={visibledPagination}
        initialPage={currentPage}
        pageCount={totalPages}
        onPageChange={handleOnPageChange(setPage)}
      />
    </Content>
  );
};

export default memo(ListCards);
