/**
 *
 * @param {*} phoneNumber
 * check if phone number is valid
 * @return {boolean}
 * the 3rd and 6th position of the phone number should be a hyphen or spaces
 * the phone number should have 10 digits
 * Steps
 * 1. check if the length of the phone number is 10 digits
 * 2. check if the position 3 and 6 of the phone number are spaces or hyphens
 * 3. use charAt to check if charAt(3) or charAt(6) is spaces or hyphens
 *
 *
 *
 */

function validatePhoneNumber(phoneNumber) {
  if (!isNaN(phoneNumber)) {
    return true;
  }
  let isValidNumber = phoneNumber.match(
    /[`!@#$%^&*()_\+=\[\]{};':"\\|,.<>\/?~a-zA-Z]/g
  );
  return !isValidNumber &&
    ((phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-") ||
      (phoneNumber.charAt(3) === " " && phoneNumber.charAt(7) === " "))
    ? true
    : false;
}

console.log(validatePhoneNumber("1234567890")); // should return true
console.log(validatePhoneNumber("123-456-7890")); // should return true
console.log(validatePhoneNumber("123 456 7890")); // should return true
console.log(validatePhoneNumber("123-45-67890")); // should return false
console.log(validatePhoneNumber("1234-567890")); // should return false
