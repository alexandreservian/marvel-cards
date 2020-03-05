// @flow
import React, { useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/header';
import ButtonBackPage from 'components/button-back-page';
import { Content } from './style';

type Props = {
  card: Object<any>,
  searchCard: Function
};

const Card = ({ card, searchCard }: Props): React.Node => {
  const { id } = useParams();

  useEffect(() => {
    searchCard(id);
  }, [searchCard, id]);

  return (
    <Content>
      <Header>
        <ButtonBackPage />
      </Header>
    </Content>
  );
};

export default memo(Card);
