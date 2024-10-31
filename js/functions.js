const checkingStringLength = (stringToCheck, stringLength) => (stringToCheck.length <= stringLength);

checkingStringLength('проверяемая строка', 20);
checkingStringLength('проверяемая строка', 18);
checkingStringLength('проверяемая строка', 10);

const palindrome = (stringToConvert) => {
  const convertedString = stringToConvert.replaceAll(' ', '').toLowerCase();
  let emptyString = '';

  for (let i = convertedString.length - 1; i >= 0; i--) {
    emptyString += convertedString[i];
  }

  return emptyString === convertedString;
};

palindrome('топот');
palindrome('ДовОд');
palindrome('Лёша на полке клопа нашёл ');
