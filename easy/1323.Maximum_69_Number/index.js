/**
 * @param {number} num
 * @return {number}
 */
let maximum69Number = function (num) {
    let stringNum = num.toString();
    // loop through the string
    for (let i = 0; i < stringNum.length; i++) {
        // if the current digit is 6
        if (stringNum[i] === '6') {
            // replace 6 with 9
            return +stringNum.replace('6', '9');
        }
    }
    // if there is no 6 then return the original number
    return +num;
};
