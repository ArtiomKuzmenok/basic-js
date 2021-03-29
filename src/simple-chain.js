const CustomError = require("../extensions/custom-error");


const chainMaker = {
  connectSymbol : "~~",
  arr: [],
  getLength() {
    return this.arr.getLength;
    
  },
  addLink(value) {
    this.arr.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if ((position >= 1) && (position<= this.arr.length)) {
      this.arr.splice(position-1, 1);
      return this;
    }
    this.arr = [];
    throw new Error();
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
   let finalStr = this.arr.join(this.connectSymbol);
   this.arr=[];
   return finalStr;
  }
};



module.exports = chainMaker;
