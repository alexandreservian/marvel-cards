import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, fireEvent, cleanup, waitForElement, wait } from 'test-utils';
import { App } from 'app';

afterEach(cleanup);

beforeEach(async () => {
  jest.setTimeout(30000);
});

describe('Page Card', () => {
  test('page 1011334 should return title "3-D Man"', async () => {
    const history = createMemoryHistory();
    history.push('/card-list/1011334');
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const title = await waitForElement(() => getByTestId('title-hero'));
    await wait(() => {
      expect(title).toHaveTextContent('3-D Man');
    });
  });

  test('page 1011334 should return description "Hero doesnt have description."', async () => {
    const history = createMemoryHistory();
    history.push('/card-list/1011334');
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const description = await waitForElement(() => getByTestId('description-content'));
    await wait(() => {
      expect(description).toHaveTextContent("Hero doesn't have description");
    });
  });

  test('change description of page 1011334', async () => {
    const history = createMemoryHistory();
    history.push('/card-list/1011334');
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const buttonChange = await waitForElement(() => getByTestId('button-change-description'));
    fireEvent.click(buttonChange);
    const textArea = await waitForElement(() => getByTestId('textarea-description'));
    fireEvent.change(textArea, { target: { value: 'New description' } });
    const submit = await waitForElement(() => getByTestId('submit'));
    fireEvent.click(submit);
    const description = await waitForElement(() => getByTestId('description-content'));
    await wait(() => {
      expect(description).toHaveTextContent('New description');
    });
  });

  test('page 1011334 should have 2 links: Wiki and Details."', async () => {
    const history = createMemoryHistory();
    history.push('/card-list/1011334');
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const wiki = await waitForElement(() => getByTestId('link-wiki'));
    const detail = await waitForElement(() => getByTestId('link-detail'));
    await wait(() => {
      expect(wiki).toHaveTextContent('Read more on Wiki');
      expect(detail).toHaveTextContent('Read more details of comic');
    });
  });
});
