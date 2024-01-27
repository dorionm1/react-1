function addCommas(num) {
  let stringNum = num.toString();
  let commafiedNumArr = [];
  let formattedNum;

  let isNeg = 0;
  //conditional for IF number is negative
  if (stringNum.indexOf('-') === 0) {
    stringNum = stringNum.substring(1);
    isNeg = 1;
  } else {
    isNeg = 0;
  }
  for (let i = 0; i < stringNum.length; i++) {
    commafiedNumArr.push(stringNum[i]);
  }
  if (stringNum.length >= 4) {
    if (stringNum.length % 3 === 1) {
      pos = 1;
      int = 4;
      while (pos < commafiedNumArr.length) {
        if (stringNum.indexOf('-')) {
        }
        commafiedNumArr.splice(pos, 0, ',');
        pos += int;
      }
    }
    if (stringNum.length % 3 === 2) {
      pos = 2;
      int = 4;
      while (pos < commafiedNumArr.length) {
        commafiedNumArr.splice(pos, 0, ',');
        pos += int;
      }
    }
    if (stringNum.length % 3 === 0) {
      pos = 3;
      int = 4;
      while (pos < commafiedNumArr.length) {
        commafiedNumArr.splice(pos, 0, ',');
        pos += int;
      }
    }
  }
  if (isNeg === 1) {
    formattedNum = '-'.concat(commafiedNumArr.join(''));
  } else {
    formattedNum = commafiedNumArr.join('');
  }
  console.log(formattedNum)
  return formattedNum
}

addCommas(-500000)

module.exports = addCommas;