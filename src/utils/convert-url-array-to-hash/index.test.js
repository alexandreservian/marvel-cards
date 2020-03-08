import convertUrlArrayToHash from './index';

describe('convertUrlArrayToHash', () => {
  test('convertUrlArrayToHash should be a function', () => {
    expect(convertUrlArrayToHash).toBeInstanceOf(Function);
  });

  test('convertUrlArrayToHash() should return {}', () => {
    expect(convertUrlArrayToHash()).toStrictEqual({});
  });

  test('convertUrlArrayToHash([]) should return {}', () => {
    expect(convertUrlArrayToHash([])).toStrictEqual({});
  });

  test('convertUrlArrayToHash([example]) should return {result}', () => {
    const example = [{ type: 'detail', url: 'google.com.br' }];
    const result = { detail: 'google.com.br' };
    expect(convertUrlArrayToHash(example)).toStrictEqual(result);
  });

  test('convertUrlArrayToHash([example]) should return {result}', () => {
    const example = [
      { type: 'detail', url: 'google.com.br' },
      { type: 'wiki', url: 'facebook.com.br' }
    ];
    const result = { detail: 'google.com.br', wiki: 'facebook.com.br' };
    expect(convertUrlArrayToHash(example)).toStrictEqual(result);
  });
  test('convertUrlArrayToHash(7) should throw a TypeError with message "The parameter must be an array"', () => {
    let error;

    try {
      convertUrlArrayToHash(7);
    } catch (e) {
      error = e.message;
    }

    expect(error).toBe('The parameter must be an array');
  });
});
