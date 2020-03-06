//@flow
import React, { useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/header';
import ButtonBackPage from 'components/button-back-page';
import LoadingPage from 'components/loading-page';
import Perfil from 'components/perfil';
import Collection from 'components/collection';
import { Content } from './style';

type Props = {
  card: Object<any>,
  searchCard: Function,
  loadingDescription: Boolean,
  comics?: Array<any>,
  events?: Array<any>,
  series?: Array<any>
};

const Card = ({
  card,
  searchCard,
  loadingDescription,
  comics,
  events,
  series
}: Props): React.Node => {
  const { id } = useParams();
  const visibleComics = !!comics.length;
  const visibleEvents = !!events.length;
  const visibleSeries = !!series.length;

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
      <Collection data={comics} title="Comics" icon="book-open" visible={visibleComics} />
      <Collection data={events} title="Events" icon="calendar" visible={visibleEvents} />
      <Collection data={series} title="Series" icon="layers" visible={visibleSeries} />
    </Content>
  );
};

export default memo(Card);
