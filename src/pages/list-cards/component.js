// @flow
import React, { useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
type Props = {
  cards: Array<any>,
  searchCards: Function
};

const ListCards = ({ cards, searchCards }: Props): React.Node => {
  useEffect(() => {
    searchCards();
  }, [searchCards]);

  return (
    <div>
      <ul>
        {cards.map(({ id, name, thumbnail }) => (
          <li key={id}>
            <img src={thumbnail} alt={name} />
            <Link to={`card-list/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ListCards);
