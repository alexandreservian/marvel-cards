//@flow
import React, { useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/header';
import ButtonBackPage from 'components/button-back-page';
import LoadingPage from 'components/loading-page';
import Perfil from 'components/perfil';
import Collection from 'components/collection';
import LinkMoreCollection from 'components/link-more-collection';
import { Content } from './style';

type Props = {
  card: Object<any>,
  searchCard: Function,
  loadingDescription: Boolean,
  comics?: Array<any>,
  events?: Array<any>,
  series?: Array<any>,
  hasMoreComics: Boolean,
  hasMoreEvents: Boolean,
  hasMoreSeries: Boolean,
  resetCard: Function
};

const handleOnSubmit = (onSubmit, id) => value => {
  console.log(id);
  console.log(value);
};

const Card = ({
  card,
  searchCard,
  loadingDescription,
  comics,
  events,
  series,
  hasMoreComics,
  hasMoreEvents,
  hasMoreSeries,
  resetCard
}: Props): React.Node => {
  const { id } = useParams();
  const visibleComics = !!comics.length;
  const visibleEvents = !!events.length;
  const visibleSeries = !!series.length;

  useEffect(() => {
    searchCard(id);
    return () => resetCard();
  }, [searchCard, resetCard, id]);

  return (
    <Content>
      <Header>
        <ButtonBackPage />
      </Header>
      <LoadingPage visible={loadingDescription} />
      <Perfil {...card} visible={!loadingDescription} onSubmit={handleOnSubmit(1, id)} />
      <Collection data={comics} title="Comics" icon="book-open" visible={visibleComics} />
      <LinkMoreCollection text="See more Comics" to={`${id}/comics`} visible={hasMoreComics} />
      <Collection data={events} title="Events" icon="calendar" visible={visibleEvents} />
      <LinkMoreCollection text="See more Events" to={`${id}/events`} visible={hasMoreEvents} />
      <Collection data={series} title="Series" icon="layers" visible={visibleSeries} />
      <LinkMoreCollection text="See more Series" to={`${id}/series`} visible={hasMoreSeries} />
    </Content>
  );
};

export default memo(Card);
