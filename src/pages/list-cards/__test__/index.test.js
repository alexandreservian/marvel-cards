import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, fireEvent, cleanup, waitForElement, wait } from 'test-utils';
import { App } from 'app';

afterEach(cleanup);

afterEach(() => {
  const history = createMemoryHistory();
  history.push('/card-list');
});

beforeEach(async () => {
  jest.setTimeout(30000);
});

describe('Page List Cards', () => {
  test('render the first 23 cards', async () => {
    const history = createMemoryHistory();
    const { getAllByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const cards = await waitForElement(() => getAllByTestId('cards'));
    await wait(() => {
      expect(cards.length).toBe(23);
    });
  });

  test('render in pagination with page 1 as active', async () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const pagination = await waitForElement(() => getByTestId('pagination'));
    await wait(() => {
      expect(pagination.querySelector('.active')).toHaveTextContent('1');
    });
  });

  test('change to page 2 after click in link next', async () => {
    const history = createMemoryHistory();
    const { getByTestId, getAllByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    await waitForElement(() => getAllByTestId('cards'));
    const pagination = await waitForElement(() => getByTestId('pagination'));
    const linkNext = pagination.querySelector('.next a');
    fireEvent.click(linkNext);
    const paginationUpdated = await waitForElement(() => getByTestId('pagination'));
    await wait(() => {
      expect(history.location.search).toBe('?page=2');
      expect(paginationUpdated.querySelector('.active')).toHaveTextContent('2');
    });
  });

  test('change to page 4 after click in link number 4', async () => {
    const history = createMemoryHistory();
    const { getByTestId, getAllByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    await waitForElement(() => getAllByTestId('cards'));
    const pagination = await waitForElement(() => getByTestId('pagination'));
    const linkNext = pagination.querySelector('li:nth-child(5) a');
    fireEvent.click(linkNext);
    const paginationUpdated = await waitForElement(() => getByTestId('pagination'));
    await wait(() => {
      expect(history.location.search).toBe('?page=4');
      expect(paginationUpdated.querySelector('.active')).toHaveTextContent('4');
    });
  });

  test('change to page 6 after click in link prev', async () => {
    const history = createMemoryHistory();
    history.push('/card-list?page=7');
    const { getByTestId, getAllByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    await waitForElement(() => getAllByTestId('cards'));
    const pagination = await waitForElement(() => getByTestId('pagination'));
    const linkNext = pagination.querySelector('.previous a');
    fireEvent.click(linkNext);
    const paginationUpdated = await waitForElement(() => getByTestId('pagination'));
    await wait(() => {
      expect(history.location.search).toBe('?page=6');
      expect(paginationUpdated.querySelector('.active')).toHaveTextContent('6');
    });
  });

  test('search for "wolverine" and return 5 results', async () => {
    const history = createMemoryHistory();
    const { getByTestId, getAllByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const inputSearch = await waitForElement(() => getByTestId('input'));
    fireEvent.change(inputSearch, { target: { value: 'wolverine' } });
    const cards = await waitForElement(() => getAllByTestId('cards'));
    await wait(() => {
      expect(cards.length).toBe(5);
      expect(history.location.search).toBe('?page=1&q=wolverine');
    });
  });

  test('change page alter click link inside list', async () => {
    const history = createMemoryHistory();
    const { getAllByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const cards = await waitForElement(() => getAllByTestId('cards'));
    const firstCard = cards[0].querySelector('a');
    fireEvent.click(firstCard);
    await wait(() => {
      expect(history.location.pathname).toBe('/card-list/1011334');
    });
  });
});
