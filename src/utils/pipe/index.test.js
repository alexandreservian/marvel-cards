import pipe from './index';

describe('pipe', () => {
  test('pipe should be a function', () => {
    expect(pipe).toBeInstanceOf(Function);
  });

  test('getTotalPages([example])("ale") should return ["A","L","E"]', () => {
    const toUpperCase = string => string.toUpperCase();
    const toArray = string => string.split('');
    expect(pipe(toUpperCase, toArray)('ale')).toStrictEqual(['A', 'L', 'E']);
  });

  test('pipe("test",5,[5])(10) should throw a TypeError with message "All parameter must be an function"', () => {
    let error;

    try {
      pipe('test', 5, [5])(10);
    } catch (e) {
      error = e.message;
    }

    expect(error).toBe('All parameter must be an function');
  });
});
