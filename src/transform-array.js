const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // function transform(arr) {
  const newArr = arr.slice();
  const result = [];
  // if (newnewArr.indexOf("--discard-prev") == 0 || newnewArr.indexOf("--double-prev") == 0) {
  //   newnewArr.splice(0, 1);
  // }
  // else if (newnewArr.indexOf("--discard-next") == newnewArr.length -1 || newnewArr.indexOf("--double-next") == newnewArr.length -1 ){
  //   newnewArr.splice(-1, 1);
  // } 
  const deleteItem = Symbol("deleteItem");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-next") {
      i++;
      newArr[i] = deleteItem;

      continue;
    } else if (newArr[i] === "--discard-prev") {
      if ((newArr[i - 1] !== deleteItem)) {
        result.pop();
      }

      continue;
    } else if (newArr[i] === "--double-next") {
      if ((i + 1) < newArr.length) {
        result.push(newArr[i + 1]);
      }
      continue;

    } else if (newArr[i] === "--double-prev") {
      if ((i - 1 >= 0) && (newArr[i - 1] !== deleteItem)) {
        result.push(newArr[i - 1]);
      }

      continue;
    }
    result.push(newArr[i]);

  }

  return result;
};
// const input = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];
// const output = transform(input);
// console.log(output);
// const input2= [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5];
// const output2 = transform(input2);
// console.log(output2);