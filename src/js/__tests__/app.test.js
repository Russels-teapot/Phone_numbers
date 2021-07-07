import Validator from '../PhoneNumbers';

const validator = new Validator();
test('Russian-eight phone', () => {
  expect(validator.validatePhone('8 (927) 000-00-00')).toEqual('+79270000000');
});

test('Russian-international phone', () => {
  expect(validator.validatePhone('+7 (960) 123-45-67')).toEqual('+79601234567');
});

test('Non-russian phone', () => {
  expect(validator.validatePhone('+88 123 456 7890')).toEqual('+881234567890');
});
