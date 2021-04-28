const sum = (a: number, b: number) => {
  return a + b;
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const fillKeyValues = (text: string, arr: { label: string; value: number }[]) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (text === arr[i].label) {
      return arr[i].value;
    }
  }
  return false;
};

test('fillKeyValuesIsTrue', () => {
  expect(
    fillKeyValues('label1', [
      { label: 'label1', value: 123 },
      { label: 'label2', value: 321 },
    ]),
  ).toBe(123);
});

test('fillKeyValuesIsFalse', () => {
  expect(
    fillKeyValues('label3', [
      { label: 'label1', value: 123 },
      { label: 'label2', value: 321 },
    ]),
  ).toBe(false);
});
