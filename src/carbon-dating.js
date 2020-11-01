const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(SampleActivity) {
  if (typeof(SampleActivity) != 'string' || SampleActivity > MODERN_ACTIVITY || SampleActivity <= 0 || isNaN(parseFloat(SampleActivity))) {
    return false;
  }
  return  Math.ceil(((Math.log(MODERN_ACTIVITY/SampleActivity)*HALF_LIFE_PERIOD)/0.693));
};
