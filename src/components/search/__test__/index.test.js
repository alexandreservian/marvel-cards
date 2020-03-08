import React from 'react';
import { render, fireEvent, cleanup } from 'test-utils';
import Search from '../index';

afterEach(cleanup);

describe('Search Component', () => {
  test('renders', () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('define prop defaultValue', () => {
    const { getByTestId } = render(<Search defaultValue="Wolverine" />);
    expect(getByTestId('input')).toHaveValue('Wolverine');
  });

  test('updates on change', () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'spider-man' } });
    expect(input).toHaveValue('spider-man');
  });

  test('trigger onSearch', () => {
    const onSearch = jest.fn(value => value);
    const { getByTestId } = render(<Search onSearch={onSearch} />);
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'magneto' } });
    expect(onSearch).toHaveBeenCalled();
    expect(onSearch.mock.results[0].value).toBe('magneto');
  });
});
