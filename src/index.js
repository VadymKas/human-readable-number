module.exports = function toReadable (number) {

  let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let numberWord = number.toString();

  if (number < 20) {
    return ones[number];
  } 

  if (numberWord.length === 2) {
    if (numberWord[0] > '1' && numberWord[1] !== '0') {
      return tens[numberWord[0]] + ' ' + ones[numberWord[1]];
    }else {
      return tens[numberWord[0]];
    }
  }

  if(numberWord.length === 3) {
    if (numberWord[1] === '0' && numberWord[2] === '0') {
      return ones[numberWord[0]] + ' hundred';
    }else if (numberWord[1] === '0' && numberWord[2] !== '0') {
      return ones[numberWord[0]] + ' hundred ' + ones[numberWord[2]];
    }else if (numberWord[1] === '1') {
      return ones[numberWord[0]] + ' hundred ' + ones[numberWord[1]+numberWord[2]];
    }else if (numberWord[1] > '1' && numberWord[2] === '0') {
      return ones[numberWord[0]] + ' hundred ' + tens[numberWord[1]];
    }else {
      return ones[numberWord[0]] + ' hundred ' + tens[numberWord[1]] + ' ' + ones[numberWord[2]];
    }
  } 
}