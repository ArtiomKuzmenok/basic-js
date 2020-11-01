const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let newArr = [];
    for (i=0; i<members.length; i++) {
      if (typeof members[i]=="string"){
        newArr[i]= members[i].trim().charAt(0).toUpperCase();
      }  
    }
    return newArr.sort().join('');
};
