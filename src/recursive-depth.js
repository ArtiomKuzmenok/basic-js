const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
     
  calculateDepth(arr) {
   let count = 0;
   let temp = 0;
   if (!arr.length) { return 1; }
 
   arr.forEach(el => {
     if (Array.isArray(el)) {
       count+= this.calculateDepth(el);
     }
 
     if (count > temp) {
       temp = count;
       count = 0;
     }
     else {
       count = 0;
     }
   })
   return temp+1;
 }
 };
