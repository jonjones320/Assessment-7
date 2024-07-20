const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('works 00:00', () => {
    expect(timeWord("00:00")).toBe("twelve o'clock am");
  });
  test('works 01:05', () => {
    expect(timeWord("01:05")).toBe("one oh-five am");
  });
  test('works 12:15', () => {
    expect(timeWord("12:15")).toBe("twelve fifteen pm");
  });
  test('works 23:30', () => {
    expect(timeWord("23:30")).toBe("eleven thirty pm");
  });
  test('works 13:00', () => {
    expect(timeWord("13:00")).toBe("one o'clock pm");
  });
});