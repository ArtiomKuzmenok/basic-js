const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let min = 2**disksNumber - 1;
    let time = Math.floor(min / (turnsSpeed / 3600));
    let result = { turns: min, seconds: time};
    return result;
};
