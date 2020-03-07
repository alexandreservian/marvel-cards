// @flow
import React, { useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryParam, NumberParam } from 'use-query-params';
import Header from 'components/header';
import ButtonBackPage from 'components/button-back-page';
import LoadingPage from 'components/loading-page';
import Collection from 'components/collection';
import Pagination from 'components/pagination';
import { Content } from './style';
type Props = {
  title: String,
  icon: String,
  data: Array<any>,
  search: Function,
  totalPages: Number,
  loading: Boolean,
  reset: Function
};

const handleOnPageChange = (setPage = () => {}) => ({ selected }) => setPage(selected + 1);

const PageCollection = ({
  title,
  icon,
  data,
  search,
  totalPages,
  loading,
  reset
}: Props): React.Node => {
  const { id } = useParams();
  const [page, setPage] = useQueryParam('page', NumberParam);
  const currentPage = page ? page - 1 : 0;
  const visibledPagination = totalPages ? true : false;

  useEffect(() => {
    search({ id, currentPage });
    return () => reset();
  }, [search, reset, id, currentPage]);

  return (
    <Content>
      <Header>
        <ButtonBackPage onlyPop={true} />
      </Header>
      <LoadingPage visible={loading} />
      <Collection data={data} title={title} icon={icon} visible={!loading} />
      <Pagination
        visible={visibledPagination}
        initialPage={currentPage}
        pageCount={totalPages}
        onPageChange={handleOnPageChange(setPage)}
      />
    </Content>
  );
};

export default memo(PageCollection);
