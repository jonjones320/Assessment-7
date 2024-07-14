const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('works', () => {
      expect(timeWord("00:00")).toBe("twelve o'clock am");
      expect(timeWord("01:05")).toBe("one oh-five am");
      expect(timeWord("12:15")).toBe("twelve fifteen pm");
      expect(timeWord("23:30")).toBe("eleven thirty pm");
      expect(timeWord("13:00")).toBe("one o'clock pm");
  });
});