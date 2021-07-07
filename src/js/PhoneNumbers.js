export default class Validator {
  validatePhone(phone) {
    const regexp1 = /^8\s|\(/;
    let newPhone = '';
    if (regexp1.test(phone)) {
      newPhone = phone.replace('8', '7');
      return `+${newPhone.match(/\d/g).join('')}`;
    }
    return `+${phone.match(/\d/g).join('')}`;
  }
}
