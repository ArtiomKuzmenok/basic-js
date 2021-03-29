const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
    let result = String(str);
    let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
    let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
    let addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
    let separator = options.hasOwnProperty('separator') ? String(options.separator) : '+';
    let additionSeparator = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';
  
  
    if (options.repeatTimes === undefined) {
      return result + String(options.addition)
    }
  
    for (let i = 1; i < additionRepeatTimes; i++) {
      addition = addition + additionSeparator + String(options.addition)
    }
    result += addition;
  
    for (let i = 1; i < repeatTimes; i++) {
      result += separator + String(str) + addition;
    }
    return result;
  };
    
  
  
  