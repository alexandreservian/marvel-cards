// @flow
import React, { useEffect, memo } from 'react';
import { useQueryParam, NumberParam, StringParam } from 'use-query-params';
import List from 'components/list';
import Header from 'components/header';
import Search from 'components/search';
import LoadingPage from 'components/loading-page';
import Pagination from 'components/pagination';
import { Content } from './style';
type Props = {
  cards: Array<any>,
  searchCards: Function,
  totalPages: Number,
  loading: Boolean
};

const handleOnPageChange = (setPage = () => {}) => ({ selected }) => setPage(selected + 1);
const handleOnSearch = (setPage = () => {}, setSearch = () => {}) => value => {
  setPage(1);
  setSearch(value);
};

const ListCards = ({ cards, searchCards, totalPages, loading }: Props): React.Node => {
  const [page, setPage] = useQueryParam('page', NumberParam);
  const [search, setSearch] = useQueryParam('q', StringParam);
  const currentPage = page ? page - 1 : 0;
  const visibledPagination = totalPages ? true : false;

  useEffect(() => {
    searchCards({ currentPage, nameStartsWith: search });
  }, [searchCards, currentPage, search]);

  return (
    <Content>
      <Header>
        <Search onSearch={handleOnSearch(setPage, setSearch)} defaultValue={search} />
      </Header>
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
