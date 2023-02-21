const vendorService = require('../../src/services/vendor');

test('returns "G" when multiplied by 3', () => {
  expect(vendorService.getString(3)).toBe('G');
  expect(vendorService.getString(-9)).toBe('G');
  expect(vendorService.getString(99)).toBe('G');
})

test('returns "N" when multiplied by 5', () => {
  expect(vendorService.getString(5)).toBe('N');
  expect(vendorService.getString(-20)).toBe('N');
  expect(vendorService.getString(10000000000000000)).toBe('N');
})

test('returns "GN" when multiplied by both 3 and 5', () => {
  expect(vendorService.getString(15)).toBe('GN');
  expect(vendorService.getString(-30)).toBe('GN');
  expect(vendorService.getString(300)).toBe('GN');
})

test('returns input when multiplied by neither 3 nor 5', () => {
  expect(vendorService.getString(11)).toBe(11);
  expect(vendorService.getString(397)).toBe(397);
  expect(vendorService.getString(-92)).toBe(-92);
})