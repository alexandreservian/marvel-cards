import getTotalPages from './index';

describe('getTotalPages', () => {
  test('getTotalPages should be a function', () => {
    expect(getTotalPages).toBeInstanceOf(Function);
  });
  test('getTotalPages() should return 1', () => {
    expect(getTotalPages()).toBe(1);
  });
  test('getTotalPages(0) should return 1', () => {
    expect(getTotalPages(0)).toBe(1);
  });
  test('getTotalPages(0,0) should return 1', () => {
    expect(getTotalPages(0, 0)).toBe(1);
  });
  test('getTotalPages(5) should return 5', () => {
    expect(getTotalPages(5)).toBe(5);
  });
  test('getTotalPages(10,0) should return 10', () => {
    expect(getTotalPages(10, 0)).toBe(10);
  });
  test('getTotalPages(15,3) should return 5', () => {
    expect(getTotalPages(15, 3)).toBe(5);
  });
  test('getTotalPages(15,3) should return 5', () => {
    expect(getTotalPages(15, 3)).toBe(5);
  });
  test('getTotalPages(10,11) should return 1', () => {
    expect(getTotalPages(10, 11)).toBe(1);
  });
  test('getTotalPages(1493,23) should return 65', () => {
    expect(getTotalPages(1493, 23)).toBe(65);
  });
  test('getTotalPages(100,15) should return 7', () => {
    expect(getTotalPages(100, 15)).toBe(7);
  });
  test('getTotalPages(1000,25) should return 40', () => {
    expect(getTotalPages(1000, 25)).toBe(40);
  });
  test('getTotalPages("test") should throw a TypeError with message "The first parameter must be an number"', () => {
    let error;

    try {
      getTotalPages('test');
    } catch (e) {
      error = e.message;
    }

    expect(error).toBe('The first parameter must be an number');
  });
  test('getTotalPages(20, "test") should throw a TypeError with message "The second parameter must be an number"', () => {
    let error;

    try {
      getTotalPages(20, 'test');
    } catch (e) {
      error = e.message;
    }

    expect(error).toBe('The second parameter must be an number');
  });
});
