import transformResponseList from './index';

describe('transformResponseList', () => {
  test('transformResponseList should be a function', () => {
    expect(transformResponseList).toBeInstanceOf(Function);
  });

  test('transformResponseList() should return {}', () => {
    expect(transformResponseList()).toStrictEqual({});
  });

  test('transformResponseList(example) should return {heroes: [5]}', () => {
    expect(transformResponseList({ data: { heroes: [5] } })).toStrictEqual({ heroes: [5] });
  });

  test('transformResponseList("test") should throw a TypeError with message "The parameter must be an object"', () => {
    let error;

    try {
      transformResponseList('test');
    } catch (e) {
      error = e.message;
    }

    expect(error).toBe('The parameter must be an object');
  });
});
