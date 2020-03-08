import transformResponseItem from './index';

describe('transformResponseItem', () => {
  test('transformResponseItem should be a function', () => {
    expect(transformResponseItem).toBeInstanceOf(Function);
  });

  test('transformResponseItem()() should return {}', () => {
    expect(transformResponseItem()()).toStrictEqual({});
  });

  test('transformResponseItem()(example) should return {name: "alexandre"}', () => {
    expect(transformResponseItem()({ data: { results: [{ name: 'alexandre' }] } })).toStrictEqual({
      name: 'alexandre'
    });
  });

  test('transformResponseItem(example)(example) should return {name: "alexandre",age: 28}', () => {
    expect(
      transformResponseItem({ age: 28 })({ data: { results: [{ name: 'alexandre' }] } })
    ).toStrictEqual({
      name: 'alexandre',
      age: 28
    });
  });

  test('transformResponseItem("test") should throw a TypeError with message "The first parameter must be an object"', () => {
    let error;

    try {
      transformResponseItem('test');
    } catch (e) {
      error = e.message;
    }

    expect(error).toBe('The first parameter must be an object');
  });

  test('transformResponseItem({})("test") should throw a TypeError with message "The second parameter must be an object"', () => {
    let error;

    try {
      transformResponseItem({})('test');
    } catch (e) {
      error = e.message;
    }

    expect(error).toBe('The second parameter must be an object');
  });
});
