// @flow
import React, { useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/header';
import ButtonBackPage from 'components/button-back-page';
import LoadingPage from 'components/loading-page';
import Perfil from 'components/perfil';
import { Content } from './style';

type Props = {
  card: Object<any>,
  searchCard: Function,
  loadingDescription: Boolean
};

const Card = ({ card, searchCard, loadingDescription }: Props): React.Node => {
  const { id } = useParams();
  console.log(card);

  useEffect(() => {
    searchCard(id);
  }, [searchCard, id]);

  return (
    <Content>
      <Header>
        <ButtonBackPage />
      </Header>
      <LoadingPage visible={loadingDescription} />
      <Perfil {...card} visible={!loadingDescription} />
    </Content>
  );
};

export default memo(Card);
